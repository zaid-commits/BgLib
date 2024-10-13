import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ComponentLibrary: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "", label: "Home" },
    { path: "buttons", label: "Buttons" },
    { path: "forms", label: "Forms" },
    { path: "cards", label: "Cards" },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <div className="hidden lg:block fixed inset-y-0 z-50 w-72 border-r">
        <div className="h-full py-6 px-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Components</h2>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center py-2 px-3 text-sm rounded-md",
                  location.pathname === `/components/${item.path}`
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex-1 lg:pl-72">
        <main className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ComponentLibrary;
