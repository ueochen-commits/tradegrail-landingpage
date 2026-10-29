import { pageInfo } from "./seo";
/** No analytics vendor, cookies or personal/trade fields. Connect a consented collector later. */
export function installSignupMeasurement() {
  const click = (event: MouseEvent) => {
    const anchor = (event.target as Element)?.closest?.(
      "a[href]",
    ) as HTMLAnchorElement | null;
    if (!anchor) return;
    const url = new URL(anchor.href, location.origin);
    if (
      url.origin !== "https://dashboard.tradegrail.net" ||
      url.searchParams.get("auth") !== "signup"
    )
      return;
    const page = pageInfo(location.pathname);
    if (!page.known) return;
    const detail = {
      event: "signup_cta_click",
      page: page.path,
      locale: page.locale,
      placement: anchor.dataset.cta || "signup-link",
    };
    window.dispatchEvent(
      new CustomEvent("tradegrail:signup-intent", { detail }),
    );
    const collector = (window as Window & { dataLayer?: unknown[] }).dataLayer;
    if (Array.isArray(collector)) collector.push(detail);
  };
  document.addEventListener("click", click);
  return () => document.removeEventListener("click", click);
}
