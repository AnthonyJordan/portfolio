import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//scrolls to top of screen when navigating with React router
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
