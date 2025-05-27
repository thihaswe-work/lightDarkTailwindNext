"use client";

import { useTheme } from "@/app/theme-provider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ marginTop: "1rem" }}>
      <p>
        Current theme: <strong>{theme}</strong>
      </p>
      <button
        className="text-green-500 text-2xl font-semibold"
        onClick={() => setTheme("light")}
        style={{ marginRight: "1rem" }}
      >
        Light Mode
      </button>
      <button
        className="text-green-500 text-2xl font-semibold"
        onClick={() => setTheme("dark")}
        style={{ marginRight: "1rem" }}
      >
        Dark Mode
      </button>
      <button
        className="text-green-500 text-2xl font-semibold"
        onClick={() => setTheme("grey")}
      >
        Grey Mode
      </button>
    </div>
  );
}
