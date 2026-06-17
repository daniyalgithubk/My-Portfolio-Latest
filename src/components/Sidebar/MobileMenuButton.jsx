import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
  { name: "CV", path: "/cv" },
];

function MobileMenuButton({ isOpen, setIsOpen }) {
  return (
    <>
      {!isOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-[60] bg-gray-800 text-white px-3 py-2 rounded-md shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{
            background:
              "linear-gradient(135deg, #0a0a0a 0%, #1a0533 40%, #2d0a5e 70%, #0f0221 100%)",
          }}
        >
          {/* Subtle glow orb for depth */}
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              pointerEvents: "none",
            }}
          />

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-4xl font-bold text-gray-400 hover:text-yellow-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          {/* Nav Links */}
          <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-semibold">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `cursor-pointer transition duration-300 tracking-wide ${
                    isActive
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Bottom branding */}
          <p className="absolute bottom-6 left-0 right-0 text-center text-gray-600 text-sm">
            Daniyal Khattak © 2025
          </p>
        </div>
      )}
    </>
  );
}

export default MobileMenuButton;
