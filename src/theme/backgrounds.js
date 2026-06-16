export const pageBg = (theme) =>
  theme === "dark"
    ? "linear-gradient(160deg, #0a0a0a 0%, #1a0533 50%, #0f0221 100%)"
    : "linear-gradient(160deg, #ffffff 0%, #f3f0ff 50%, #faf8ff 100%)";

export const text = (theme) => ({
  heading: theme === "dark" ? "#ffffff" : "#1a1a2e",
  body:    theme === "dark" ? "#d1d5db" : "#4b5563",
  muted:   theme === "dark" ? "#9ca3af" : "#6b7280",
});

export const card = (theme) =>
  theme === "dark"
    ? "rgba(255, 255, 255, 0.05)"
    : "rgba(255, 255, 255, 0.9)";

export const input = (theme) =>
  theme === "dark"
    ? { background: "rgba(255,255,255,0.08)", border: "#4b5563", color: "#ffffff" }
    : { background: "#ffffff", border: "#d1d5db", color: "#1a1a2e" };
