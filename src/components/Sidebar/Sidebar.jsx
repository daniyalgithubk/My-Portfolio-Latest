import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/Slices/ThemeSlice";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { pageBg } from "../../theme/backgrounds";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className="sidebar-visible flex-col w-64 h-screen text-white p-4 transition-colors duration-300"
      style={{
        background: pageBg(theme),
        animation: "slideInLeft 0.4s ease-out both",
      }}
    >
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes expandWidth {
          from { width: 0; }
          to   { width: 4rem; }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1);   }
          50%       { opacity: 1;   transform: translateX(-50%) scale(1.15); }
        }

        .profile-img {
          animation: fadeInDown 0.5s ease-out 0.2s both;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .profile-img:hover {
          transform: scale(1.08);
          box-shadow: 0 0 0 3px #facc15;
        }

        .theme-btn {
          transition: transform 0.3s ease, background 0.3s ease;
          animation: fadeInDown 0.5s ease-out 0.2s both;
        }
        .theme-btn:hover { transform: rotate(20deg) scale(1.15); }
        .theme-btn:active { transform: rotate(20deg) scale(0.95); }

        .profile-info {
          animation: fadeInDown 0.5s ease-out 0.35s both;
        }

        .divider-bar {
          animation: expandWidth 0.5s ease-out 0.5s both;
        }

        .nav-link {
          position: relative;
          overflow: hidden;
          transition: background 0.25s ease, color 0.25s ease, transform 0.2s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: #facc15;
          border-radius: 0 2px 2px 0;
          transform: scaleY(0);
          transition: transform 0.2s ease;
        }
        .nav-link:hover::after  { transform: scaleY(1); }
        .nav-link:hover         { transform: translateX(4px); }
        .nav-link.active-link   { transform: translateX(0); }
        .nav-link.active-link::after { transform: scaleY(0); }

        .footer-text {
          animation: fadeInUp 0.5s ease-out 0.8s both;
        }
      `}</style>

      {/* Glow orb */}
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          animation: "glowPulse 4s ease-in-out infinite",
        }}
      />

      {/* Profile & Theme Toggle */}
      <div className="flex justify-between items-center pt-14 relative">
        <img
          src="/Images/Daniyal.jpeg"
          alt="Profile"
          className="profile-img w-16 h-16 rounded-full ring-2 ring-yellow-400"
        />
        <button
          className="theme-btn text-3xl p-2 rounded-full hover:bg-white/10"
          style={{ color: theme === "dark" ? "#ffffff" : "#1a1a2e" }}
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <MdOutlineWbSunny />}
        </button>
      </div>

      {/* Profile Info */}
      <div className="profile-info mt-8 text-center relative">
        <h2
          className="text-2xl font-bold mt-4"
          style={{ color: theme === "dark" ? "#ffffff" : "#1a1a2e" }}
        >
          Daniyal Khattak
        </h2>
        <p
          style={{ color: theme === "dark" ? "#9ca3af" : "#4b5563" }}
          className="mt-1"
        >
          React JS Developer
        </p>
        <p style={{ color: theme === "dark" ? "#9ca3af" : "#4b5563" }}>
          Islamabad, Pakistan
        </p>
        <div className="divider-bar mt-4 mx-auto h-0.5 bg-yellow-400 rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2 mt-10 relative">
        {[
          { name: "Home",      path: "/" },
          { name: "Education", path: "/education" },
          { name: "Projects",  path: "/projects" },
          { name: "Skills",    path: "/skills" },
          { name: "Contact",   path: "/contact" },
          { name: "CV",        path: "/cv" },
        ].map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `nav-link px-6 py-3 rounded-md ${
                isActive ? "bg-yellow-400 text-black font-semibold active-link" : "hover:bg-white/10"
              }`
            }
            style={({ isActive }) => ({
              color: isActive ? "#000000" : theme === "dark" ? "#d1d5db" : "#1a1a2e",
              animation: `fadeInDown 0.4s ease-out ${0.4 + index * 0.07}s both`,
            })}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="footer-text" style={{ marginTop: "auto", paddingBottom: "1.5rem", textAlign: "center" }}>
        <p style={{ color: theme === "dark" ? "#4b5563" : "#9ca3af", fontSize: "12px" }}>
          Daniyal Khattak © 2025
        </p>
      </div>
    </div>
  );
};

export default Sidebar;