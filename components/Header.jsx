import { useState } from "react";
import { useRouter } from "next/router";

const Header = ({ title, onAboutClick }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-green-700 text-white py-4 px-8 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <button
          className="sm:hidden block text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>

        <nav className="hidden sm:flex space-x-6">
          <button
            className="hover:text-gray-300 transition duration-300"
            onClick={() => router.push("/farmerDashboard")}
          >
            Dashboard
          </button>
          <button
            className="hover:text-gray-300 transition duration-300"
            onClick={() => router.push("/products")}
          >
            Products
          </button>
          <button
            className="hover:text-gray-300 transition duration-300"
            onClick={onAboutClick}
          >
            About
          </button>
          <button
            className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
            onClick={() => router.push("/farmer")}
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
