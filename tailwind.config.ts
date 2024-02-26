import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554",
          "1000": "#F7FAFB",
        },
        darkBlue: "#1b6b93",
        mainBlue: "#4fc0d0",
        cyanBlue: "#4b778d",
        mainGreen: "#34be82",
        limeGreen: "#6ac57f",

        base: { "50": "#EEEEEF", "100": "#252525", "150": "#D9D9D9" },
        "gray-800": "#1f2937",
        "blue-200": "#BFDBFE",
        "sky-200": "#BAE6FD",
        "gray-500": "#6B7280",
        "gray-700": "#374151",
        "cyan-700": "#0E7490",
        "green-400": "#4ade80",
        "orange-400": "#fb923c",
        "red-400": "#f87171",
        "indigo-400": "#818cf8",
        "purple-gradient": "#A78BFA",
        "blue-gradient": "#2563EB ",
        "Navbar-Hover": "#007998",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    // "prettier-plugin-tailwindcss",
    require("tw-elements/dist/plugin.cjs"),
  ],
};
export default config;
