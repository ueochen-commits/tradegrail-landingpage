import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";
const source = (await readFile("src/lib/measurement.ts", "utf8")).replace(
  /^import .*;\n/,
  "",
);
const input = `const pageInfo=path=>({path,locale:'zh',known:path==='/guides/first-trade'});\n${source}`;
const output = ts.transpileModule(input, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const { installSignupMeasurement } = await import(
  `data:text/javascript;base64,${Buffer.from(output).toString("base64")}`
);
function setup() {
  let handler;
  const events = [];
  globalThis.location = {
    origin: "http://localhost",
    pathname: "/guides/first-trade",
  };
  globalThis.document = {
    addEventListener: (name, fn) => {
      handler = fn;
    },
    removeEventListener: (name, fn) => {
      if (handler === fn) handler = undefined;
    },
  };
  globalThis.CustomEvent = class {
    constructor(name, { detail }) {
      this.name = name;
      this.detail = detail;
    }
  };
  globalThis.window = {
    dispatchEvent: (event) => events.push(event),
    dataLayer: [],
  };
  const cleanup = installSignupMeasurement();
  return {
    events,
    cleanup,
    click: (href) =>
      handler?.({
        target: {
          closest: () => ({ href, dataset: { cta: "guide-first-trade" } }),
        },
      }),
    hasHandler: () => Boolean(handler),
  };
}
test("signup intent contains only public route, locale and placement, not query or personal data", () => {
  const f = setup();
  f.click(
    "https://dashboard.tradegrail.net?auth=signup&email=private%40example.test",
  );
  assert.deepEqual(f.events[0].detail, {
    event: "signup_cta_click",
    page: "/guides/first-trade",
    locale: "zh",
    placement: "guide-first-trade",
  });
  assert.equal(window.dataLayer.length, 1);
  assert.doesNotMatch(JSON.stringify(f.events), /private|email|account|pnl/);
  f.cleanup();
  assert.equal(f.hasHandler(), false);
});
test("login, unrelated destinations and unknown paths are not treated as acquisition signups", () => {
  const f = setup();
  f.click("https://dashboard.tradegrail.net?auth=login");
  f.click("https://unrelated.example?auth=signup");
  location.pathname = "/private-account";
  f.click("https://dashboard.tradegrail.net?auth=signup");
  assert.equal(f.events.length, 0);
  f.cleanup();
});
