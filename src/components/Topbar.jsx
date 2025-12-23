import { IoStar } from "react-icons/io5";

const TopBar = () => {
  return (
    <div className=" fixed hidden md:block top-0 left-0 w-full bg-[#D5D4D4] p-3 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center lg:px-16">

        {/* Left Section */}
        <div className="flex items-center gap-3">
          <span className="text-2xl -mt-2  font-bold">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </span>

          <div className="flex items-center gap-1">
            <div className="flex  text-yellow-400">
              <IoStar size={16} />
              <IoStar size={16} />
              <IoStar size={16} />
              <IoStar size={16} />
              <IoStar size={16} />
            </div>
            {/* <span className="text-sm text-gray-600 ml-1">5.0</span> */}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4 text-gray-600">
            <a href="#" className="text-black transition-colors">
              <i className="bi bi-facebook text-lg text-orange-700 hover:text-black transition duration-200"></i>
            </a>
            <span className="h-5  mt-1 text-black w-1 rounded-lg bg-black"></span>
            <a href="#" className="text-black transition-colors">
              <i className="bi bi-twitter-x text-lg text-orange-700 hover:text-black transition duration-200"></i>
            </a>
            <span className="h-5  mt-1 text-black w-1 rounded-lg bg-black"></span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="text-orange-500 cursor-pointer ">
              Sign in
            </button>
            <button className="text-orange-500 cursor-pointer ">
              Refer a Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;