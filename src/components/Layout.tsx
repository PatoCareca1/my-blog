// src/components/Layout.tsx
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  const getThemeClass = () => {
    if (location.pathname.startsWith("/devposts")) {
      return "bg-gradient-to-br from-blue-800 to-blue-200 text-blue-50";
    }
    if (location.pathname.startsWith("/fitnessposts")) {
      return "bg-gradient-to-br from-green-700 to-yellow-200 text-green-50";
    }
    if (location.pathname.startsWith("/about")) {
      return "bg-gradient-to-br from-gray-300 to-white text-gray-800";
    }
    return "bg-gradient-to-br from-green-600 to-blue-200 text-gray-900";
  };

  return (
    <div className={`min-h-screen flex flex-col ${getThemeClass()}`}>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
