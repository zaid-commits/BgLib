import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

const ComponentLibrary: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "buttons", label: "Buttons" },
    { path: "forms", label: "Forms" },
    { path: "cards", label: "Cards" },
    { path: "parallax-scroll", label: "Parallax Scroll" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 text-gray-900">
      <aside className="w-56 border-r border-gray-300 p-4 bg-white shadow-md">
        <h1 className="text-2xl px-2 font-bold mb-4 text-indigo-600">Components</h1>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={`/components/${item.path}`}
              className={cn(
                "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === `/components/${item.path}`
                  ? "bg-indigo-200 text-indigo-900"
                  : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <hr className="my-6 border-gray-300" />
        <div className="mt-6">
          <Link
            to="/backgrounds"
            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-900 transition-colors"
          >
            Background Library
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-8 bg-white shadow-lg rounded-lg">
        <Outlet />
      </main>
    </div>
  );
};

export default ComponentLibrary;