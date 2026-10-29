import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { SiteContent } from "./App";
export { publicPaths, headMarkup, pageInfo } from "./lib/seo";
export { SITE, UPDATED, guides } from "./content/guides";
export function render(path: string) {
  return renderToString(
    <StaticRouter location={path}>
      <SiteContent />
    </StaticRouter>,
  );
}
