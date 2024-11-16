import { useRouter } from "next/router";
import localFont from "next/font/local";
import Button from "../components/Button";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const router = useRouter();

  const handleFarmerClick = () => {
    router.push("/farmer");
  };

  const handleCustomerClick = () => {
    router.push("/customer");
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center justify-center min-h-screen bg-green-50 text-gray-900 relative`}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-100"
        style={{ backgroundImage: 'url("/back1.jpg")' }} // Correct path for the image in the public folder
      ></div>

      {/* Darker Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div> {/* Increased opacity for a darker overlay */}

      {/* Main Content */}
      <main className="z-10 text-center text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <h1 className="text-5xl font-extrabold text-green-200 mb-4">
          Welcome to FarmConnect
        </h1>
        <p className="text-xl text-green-100 mb-8">
          Choose your role to proceed and connect with local farmers or customers.
        </p>

        <div className="flex gap-8 justify-center">
          {/* Farmer Button */}
          <Button
            onClick={handleFarmerClick}
            className="px-6 py-3 text-lg bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            Farmer
          </Button>

          {/* Customer Button */}
          <Button
            onClick={handleCustomerClick}
            className="px-6 py-3 text-lg bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            Customer
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-500 z-10">
        <p>© 2024 FarmConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}
