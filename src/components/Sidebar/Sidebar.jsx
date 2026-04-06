import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/Slices/ThemeSlice";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const Sidebar = () => {

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);


  return (
   <div className="w-64 h-screen bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-4 flex flex-col transition-colors duration-300">
      
      {/* Profile & Theme Toggle */}
      <div className="flex justify-between items-center pt-6">
        <img
          src="/public/Images/Daniyal.jpeg"
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <button
          className="text-3xl p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <MdOutlineWbSunny />}
        </button>
      </div>

      {/* Profile Info */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mt-4">Daniyal Khattak</h2>
        <p className="text-gray-700 dark:text-gray-300">React JS Developer</p>
        <p className="text-gray-700 dark:text-gray-300">Islamabad, Pakistan</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4 mt-20">
        {[
          { name: "Home", path: "/" },
          { name: "Education", path: "/education" },
          { name: "Projects", path: "/projects" },
          { name: "Skills", path: "/skills" },
          { name: "Contact", path: "/contact" },
          { name: "CV", path: "/cv" },
        ].map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `px-6 py-3 rounded-md transition-all duration-300 ${
                isActive
                  ? "bg-yellow-400 text-black dark:bg-yellow-500"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"

              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
