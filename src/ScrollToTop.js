import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("ScrollToTop", pathname);
    window.scrollTo(50, 0);
  }, [pathname]);

  return null;
}