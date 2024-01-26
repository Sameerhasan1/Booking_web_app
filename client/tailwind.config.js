module.exports = {
  // ... other configurations ...

  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
    // Add other file paths as needed
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7F00FF',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
