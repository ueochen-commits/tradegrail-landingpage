import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import LandingPage from "./pages/LandingPage";
import PricingPage from "./pages/PricingPage";
import GuidesPage from "./pages/GuidesPage";
import ProductFactsPage from "./pages/ProductFactsPage";
import LegalPage from "./pages/LegalPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CheckoutPage from "./pages/CheckoutPage";
import { headMarkup, pageInfo, basePaths } from "./lib/seo";
import { localePath, pathLocale } from "./content/guides";
import { installSignupMeasurement } from "./lib/measurement";

function PageHead() {
  const { pathname } = useLocation();
  useEffect(() => {
    const p = pageInfo(pathname);
    document.documentElement.lang = p.en ? "en" : "zh-CN";
    document.querySelectorAll("[data-site-head]").forEach((el) => el.remove());
    // Replace both the generated head and client navigation metadata as one set.
    document.head
      .querySelectorAll(
        'title,meta[name="description"],meta[name="robots"],link[rel="canonical"],link[hreflang],meta[property^="og:"],meta[name^="twitter:"],#site-structured-data,link[title="TradeGrail AI overview"]',
      )
      .forEach((el) => el.remove());
    const template = document.createElement("template");
    template.innerHTML = headMarkup(pathname);
    for (const node of [...template.content.children]) {
      node.setAttribute("data-site-head", "");
      document.head.appendChild(node);
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function NotFound() {
  const { en, locale } = pageInfo(useLocation().pathname);
  return (
    <main className="guide-main guide-article">
      <h1>{en ? "Page not found" : "页面未找到"}</h1>
      <p>
        {en
          ? "The address may have changed."
          : "地址可能已变化，请从指南中心继续浏览。"}
      </p>
      <a href={localePath("/guides", locale)}>
        {en ? "Browse guides" : "浏览复盘指南"} →
      </a>
    </main>
  );
}
export function SiteContent() {
  const { pathname } = useLocation();
  const locale = pathLocale(pathname);
  const base = pageInfo(pathname).base;
  const auth = ["/login", "/signup", "/checkout", "/dashboard"].includes(base);
  useEffect(() => installSignupMeasurement(), []);
  return (
    <ThemeProvider>
      <LanguageProvider key={locale} initialLanguage={locale}>
        <PageHead />
        {!auth && <Navbar />}
        <Routes>
          {(["zh", "en"] as const).flatMap((lang) => [
            <Route
              key={`${lang}-home`}
              path={localePath("/", lang)}
              element={<LandingPage />}
            />,
            <Route
              key={`${lang}-pricing`}
              path={localePath("/pricing", lang)}
              element={<PricingPage />}
            />,
            <Route
              key={`${lang}-guides`}
              path={localePath("/guides", lang)}
              element={<GuidesPage />}
            />,
            <Route
              key={`${lang}-guide`}
              path={localePath("/guides/:slug", lang)}
              element={basePaths.includes(base) ? <GuidesPage /> : <NotFound />}
            />,
            <Route
              key={`${lang}-futures`}
              path={localePath("/futures-trading-journal", lang)}
              element={<ProductFactsPage />}
            />,
            <Route
              key={`${lang}-about`}
              path={localePath("/about", lang)}
              element={<ProductFactsPage />}
            />,
            ...['terms','privacy','refunds'].map(key=><Route key={`${lang}-${key}`} path={localePath('/'+key,lang)} element={<LegalPage/>}/>),
          ])}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/dashboard" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageProvider>
    </ThemeProvider>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <SiteContent />
    </BrowserRouter>
  );
}
