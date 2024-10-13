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
    <div className="flex min-h-screen bg-white">
      <aside className="w-64 border-r border-gray-200 p-6">
        <h1 className="text-2xl font-bold mb-6">Components</h1>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={`/components/${item.path}`}
              className={cn(
                "block px-4 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === `/components/${item.path}`
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8">
          <Link
            to="/backgrounds"
            className="block px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            Background Library
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default ComponentLibrary;