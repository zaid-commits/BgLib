import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

const ComponentLibrary: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = [
    {
      category: "UI Elements",
      items: [
        { path: "buttons", label: "Buttons" },
        { path: "forms", label: "Forms" },
        { path: "cards", label: "Cards" },
        { path: "parallax-scroll", label: "Parallax Scroll" },
      ],
    },
    {
      category: "Layouts",
      items: [
        { path: "grids", label: "Grids" },
        { path: "flexbox", label: "Flexbox" },
        { path: "containers", label: "Containers" },
      ],
    },
    {
      category: "Navigation",
      items: [
        { path: "menus", label: "Menus" },
        { path: "tabs", label: "Tabs" },
        { path: "breadcrumbs", label: "Breadcrumbs" },
      ],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 text-gray-900">
      <button
        className="md:hidden p-4 bg-indigo-600 text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      <aside className={`w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-300 p-4 bg-white shadow-md transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <h1 className="text-2xl px-2 font-bold mb-4 text-black">Components</h1>
        {categories.map((category, index) => (
          <div key={category.category} className="mb-6">
            <h2 className="text-lg px-2 font-semibold text-black mb-2">{category.category}</h2>
            <nav className="space-y-1">
              {category.items.map((item) => (
                <Link
                  key={item.path}
                  to={`/components/${item.path}`}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === `/components/${item.path}`
                      ? "bg-indigo-200 text-indigo-900"
                      : "text-gray-500 hover:bg-indigo-100 hover:text-indigo-900"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {index < categories.length - 1 && <hr className="my-4 border-gray-300" />}
          </div>
        ))}
        <hr className="my-6 border-gray-300" />
        <div className="mt-6">
          <Link
            to="/backgrounds"
            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-indigo-100 hover:text-indigo-900 transition-colors"
          >
            Background Library
          </Link>
        </div>
      </aside>
      <main className={`flex-1 p-4 md:p-8 bg-white shadow-lg rounded-lg transition-all ${isSidebarOpen ? 'mt-0' : 'mt-0 md:mt-0'}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default ComponentLibrary;