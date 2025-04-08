// src/components/Header.tsx
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Dev", path: "/devposts" },
    { label: "Fitness", path: "/fitnessposts" },
    { label: "Sobre", path: "/about" },
  ];

  return (
    <header className="w-full px-8 py-4 flex justify-end items-center bg-transparent backdrop-filter-none shadow-none border-none">
      <nav className="space-x-6 text-lg font-medium">
        {navItems.map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            className={`hover:underline transition ${
              location.pathname === path ? "font-bold underline" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
