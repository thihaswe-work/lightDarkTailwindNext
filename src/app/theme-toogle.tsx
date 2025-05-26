"use client";

import { useTheme } from "@/app/theme-provider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ marginTop: "1rem" }}>
      <p>
        Current theme: <strong>{theme}</strong>
      </p>
      <button onClick={() => setTheme("light")} style={{ marginRight: "1rem" }}>
        Light Mode
      </button>
      <button onClick={() => setTheme("dark")} style={{ marginRight: "1rem" }}>
        Dark Mode
      </button>
      <button onClick={() => setTheme("grey")}>Grey Mode</button>
    </div>
  );
}
