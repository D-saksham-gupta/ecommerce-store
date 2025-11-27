"use client";

import { Category } from "@/types";
import { Grid, Home, MessageSquare, Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface MainNavProps {
  data: Category[] | [];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-50">
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-2 z-50 p-2 text-rose-500 rounded-lg shadow-lg hover:bg-rose-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={0} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed lg:static
          top-0 left-0
          w-64 bg-white border-r border-gray-200 min-h-screen
          transform transition-transform duration-300 ease-in-out
          z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-6">
          <div className="flex gap-2 mb-8 items-center">
            <img
              width={50}
              className="rounded-full h-[50px]"
              src="/logo2.jpg"
              alt=""
            />
            <h1 className="text-2xl font-bold text-center items-center">
              Chikan <span className="text-rose-500">Stop</span>
            </h1>
          </div>

          <nav className="space-y-1 mb-8">
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-gray-700">
              <Home size={20} />
              <span>Home</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-gray-700">
              <Grid size={20} />
              <span>Our Story</span>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-gray-700">
              <MessageSquare size={20} />
              <span>Blog</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-gray-700">
              <Phone size={20} />
              <span>Contact</span>
            </button>
          </nav>

          <div className="border-t border-gray-200 pt-6">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-rose-500 text-white rounded-lg font-medium">
              <Grid size={20} />
              <span>All Category</span>
            </button>
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:text-rose-500 ${
                  route.active ? "text-rose-500" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-rose-500">❤</span>
                <span>{route.label}</span>
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold mb-2 text-gray-900">
              Value of the Day
            </h3>
            <p className="text-sm text-gray-600 mb-1">Top 100 Offers</p>
            <p className="text-sm text-gray-600">New Arrivals</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MainNav;
