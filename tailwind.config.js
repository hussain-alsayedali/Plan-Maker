/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/*.{js,jsx,ts,tsx}"],
  options: {
    safelist: ["bg-red-500", "text-green-600"], // Add dynamic classes here
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
