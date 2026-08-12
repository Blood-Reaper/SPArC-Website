import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useScrollState } from "../../hooks/useScrollState";

export default function PageLayout() {
  const { progress } = useScrollState();
  const { pathname } = useLocation();

  // Scroll to top on route change, matching normal multi-page navigation.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
    </>
  );
}
