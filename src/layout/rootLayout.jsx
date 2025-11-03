import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { useLocation } from "react-router-dom";
const rootLayout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      {loading ? (
        <div className="flex items-center justify-center w-full h-[400px] rounded-xl mt-20">
          <div className="flex items-center gap-3 text-gray-600 text-lg font-medium">
            <span className="animate-spin h-6 w-6 border-4 border-t-transparent rounded-full"></span>
            Loading Content...
          </div>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
};

export default rootLayout;
