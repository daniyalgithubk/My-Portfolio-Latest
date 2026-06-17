import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { pageBg, text } from "../../theme/backgrounds";
import { Link } from "react-router-dom";

const Home = () => {
  const theme = useSelector((state) => state.theme.theme);
  const t = text(theme);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const accent = theme === "dark" ? "#facc15" : "#a78bfa";
  const accentShadow =
    theme === "dark"
      ? "0 4px 15px rgba(250, 204, 21, 0.3)"
      : "0 4px 15px rgba(167, 139, 250, 0.3)";
  const accentShadowHover =
    theme === "dark"
      ? "0 8px 25px rgba(250, 204, 21, 0.5)"
      : "0 8px 25px rgba(167, 139, 250, 0.5)";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 transition-colors duration-300"
      style={{
        background: pageBg(theme),
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background orbs */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          top: "10%",
          left: "60%",
          transform: "translateX(-50%)",
          animation: "floatOrb 6s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(250, 204, 21, 0.06) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(250, 204, 21, 0.1) 0%, transparent 70%)",
          bottom: "10%",
          left: "20%",
          animation: "floatOrb 8s ease-in-out infinite reverse",
          pointerEvents: "none",
        }}
      />

      {/* Profile Image */}
      <div
       className="profile-top-padding"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateY(0) scale(1)"
            : "translateY(-40px) scale(0.8)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <img
          src="/Images/Daniyal.jpeg"
          alt="Profile"
          className="w-38 h-40 rounded-full mb-6 ring-4"
          style={{
            ringColor: accent,
            boxShadow:
              theme === "dark"
                ? `0 0 30px rgba(250, 204, 21, 0.3), 0 0 0 4px ${accent}`
                : `0 0 30px rgba(167, 139, 250, 0.3), 0 0 0 4px ${accent}`,
          }}
        />
      </div>

      {/* Heading */}
      <h1
        className="text-4xl font-bold"
        style={{
          color: t.heading,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
        }}
      >
        Hello My Name is <span style={{ color: accent }}>Daniyal Khattak</span>
      </h1>

      {/* Subheading */}
      <h2
        className="text-2xl font-semibold mt-2"
        style={{
          color: t.body,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
        }}
      >
        I am a <span style={{ color: accent }}>React JS Developer</span>
      </h2>

      {/* Divider */}
      <div
        style={{
          width: visible ? "80px" : "0px",
          height: "3px",
          background: accent,
          borderRadius: "2px",
          margin: "16px auto",
          transition: "width 0.8s ease 0.6s",
        }}
      />

      {/* Description */}
      <p
        className="max-w-2xl mx-auto mt-2"
        style={{
          color: t.muted,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s",
          lineHeight: "1.8",
        }}
      >
        Results-driven{" "}
        <span style={{ color: accent, fontWeight: "600" }}>
          React.js Developer
        </span>{" "}
        with{" "}
        <span style={{ color: accent, fontWeight: "600" }}>1.5+ years</span> of
        professional experience building scalable, production-level web
        applications using{" "}
        <span style={{ color: accent, fontWeight: "600" }}>
          React.js, Next.js, TypeScript and Redux
        </span>
        . Proven track record of delivering responsive, high-performance
        interfaces through{" "}
        <span style={{ color: accent, fontWeight: "600" }}>
          API integration, state management
        </span>{" "}
        and component-based architecture. Experienced in{" "}
        <span style={{ color: accent, fontWeight: "600" }}>Agile/Scrum</span>{" "}
        environments with a strong foundation in modern frontend development
        practices.
      </p>

      {/* CTA Buttons */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "32px",
          flexWrap: "wrap",
          justifyContent: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease 0.9s, transform 0.8s ease 0.9s",
        }}
      >
        <Link
          to="/contact"
          style={{
            background: accent,
            color: theme === "dark" ? "#000000" : "#ffffff",
            padding: "12px 28px",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            boxShadow: accentShadow,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = accentShadowHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = accentShadow;
          }}
        >
          Contact Me
        </Link>

        <Link
          to="/projects"
          style={{
            background: "transparent",
            color: t.heading,
            padding: "12px 28px",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            border: `2px solid ${accent}`,
            transition: "transform 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.borderColor = accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = accent;
          }}
        >
          View Projects
        </Link>
      </div>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      <style>{`
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @media (max-width: 320px) {
          .profile-top-padding {
            padding-top: 2rem;
          }
        }
      `}</style>

    </div>
  );
};

export default Home;
