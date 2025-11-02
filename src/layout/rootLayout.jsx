import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { useLocation } from "react-router-dom";
const rootLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default rootLayout;
