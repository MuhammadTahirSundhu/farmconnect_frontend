import React from "react";
import Link from "next/link"; // Import Link component for page navigation
import { FaHome, FaSeedling, FaCogs, FaChartLine, FaSignOutAlt } from "react-icons/fa"; // Import icons

const Sidebar = () => {
  return (
    <aside className="flex flex-col shrink-0 w-64 h-screen bg-white border-r border-dashed border-neutral-200 fixed transition-transform ease-in-out duration-300">
      {/* Logo Section */}
      <div className="flex items-center justify-center py-6 border-b border-dashed">
        <img
          alt="Logo"
          src="/logo.jpg"
          className="w-32"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col mt-6 space-y-4 px-6">
        <Link
          href="/farmerdashboard"
          className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-300 ease-in-out"
        >
          <FaHome className="mr-3 text-xl" />
          <span>Home</span>
        </Link>
        <Link
          href="/FarmerMyCrops"
          className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-300 ease-in-out"
        >
          <FaSeedling className="mr-3 text-xl" />
          <span>My Crops</span>
        </Link>
        <Link
          href="/manageProduct"
          className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-300 ease-in-out"
        >
          <FaCogs className="mr-3 text-xl" />
          <span>Manage Crops</span>
        </Link>
        <Link
          href="/Analytics"
          className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-300 ease-in-out"
        >
          <FaChartLine className="mr-3 text-xl" />
          <span>Analytics</span>
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto px-6 py-4">
        <Link href="/" passHref>
          <button className="w-full px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
            <FaSignOutAlt className="mr-3 inline-block" />
            Logout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
