import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import GetFeedback from '@/components/GetFeedback';
import Cart from '@/components/Cart';

const Profile = () => {



  const currentConsumer = useSelector((state) => state.currentRecords.currentConsumer); // Correct selector path
  console.log(currentConsumer);

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <div className="w-full text-white bg-green-700">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <a
              href="#"
              className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none"
            >
              My Profile
            </a>
            <button className="md:hidden rounded-lg focus:outline-none">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex md:justify-end md:flex-row">
            <div className="relative">
              <button className="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:outline-none">
                <span>{currentConsumer.name}</span>
                <FaUserCircle size={50} className="text-emerald-600 mr-4" />
              </button>
            </div>
          </nav>
        </div>
      </div>
      {/* End Navbar */}

      {/* Main Content */}
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2">
          {/* Left Side */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* Profile Card */}
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt="Jane Doe"
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {currentConsumer.name}
              </h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                Owner at Her Company Inc.
              </h3>
              <p className="text-sm text-gray-500 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt.
              </p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">{currentConsumer.registeredDate}</span>
                </li>
              </ul>
            </div>
            {/* End Profile Card */}
          </div>
          {/* End Left Side */}

          {/* Right Side */}
          <div className="w-full md:w-9/12 mx-2">
            {/* About Section */}
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <div className="px-4 py-2">{currentConsumer.name}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Location</div>
                    <div className="px-4 py-2">{currentConsumer.location}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                      <a href="mailto:jane@example.com">{currentConsumer.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End About Section */}
          </div>
          {/* End Right Side */}
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Profile;
