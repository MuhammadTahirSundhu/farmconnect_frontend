import React from "react";
import Link from "next/link"; // Import Link component for page navigation

const Sidebar = () => {
  return (
    <aside className="flex flex-col shrink-0 w-64 h-screen bg-white border-r border-dashed border-neutral-200 fixed">
      {/* Logo Section */}
      <div className="flex items-center justify-center py-6 border-b border-dashed">
        <img
          alt="Logo"
          src="/logo.jpg"
          className="w-32"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col mt-4 space-y-2 px-6">
        <Link href="/farmerdashboard" className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-100 rounded-lg">
          <span>Home</span>
        </Link>
        <Link href="/FarmerMyCrops" className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-100 rounded-lg">
          <span>My Crops</span>
        </Link>
        <Link href="/manageProduct" className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-100 rounded-lg">
          <span>Manage Crops</span>
        </Link>
        <Link href="/Analytics" className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-100 rounded-lg">
          <span>Analytics</span>
        </Link>
        <Link href="/profile" className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-100 rounded-lg">
          <span>Profile</span>
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto px-6 py-4">
        <button className="w-full px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
