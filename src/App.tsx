import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'motion/react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

// 首页直接导入，不使用 lazy loading（用户一定会访问）
import LandingPage from './pages/LandingPage';

// 其他页面使用 React.lazy() 实现代码分割 - 只在访问时才加载
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SignupPage = React.lazy(() => import('./pages/SignupPage'));
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'));

// 加载中的占位组件
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function DashboardRedirect() {
  useEffect(() => {
    window.location.replace('https://dashboard.tradegrail.net');
  }, []);
  return <LoadingFallback />;
}

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isCheckoutPage = location.pathname === '/checkout';

  return (
    <>
      {!isAuthPage && !isCheckoutPage && <Navbar />}
      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <Suspense fallback={<LoadingFallback />}>
            <Routes location={location}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/dashboard" element={<DashboardRedirect />} />
            </Routes>
          </Suspense>
        </div>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <AppContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
