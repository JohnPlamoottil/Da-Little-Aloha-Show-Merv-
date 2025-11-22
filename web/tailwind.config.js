/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "about-page": "url('/src/assets/aboutpage_background.jpeg')",
      },
    },
  },
  plugins: [],
};
