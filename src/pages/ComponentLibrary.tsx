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
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <aside className="w-64 border-r border-gray-300 p-6 bg-white">
        <h1 className="text-2xl font-bold mb-6">Components</h1>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={`/components/${item.path}`}
              className={cn(
                "block px-4 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === `/components/${item.path}`
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <hr className="my-8 border-gray-300" />
        <div className="mt-8">
          <Link
            to="/backgrounds"
            className="block px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            Background Library
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-10 bg-white shadow-lg">
        <Outlet />
      </main>
    </div>
  );
};

export default ComponentLibrary;