/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          move: 'move 5s linear infinite',
          moveHorizontal: 'moveHorizontal 40s ease infinite',
          moveVertical: 'moveVertical 30s ease infinite',
          moveInCircle: 'moveInCircle 20s ease-in-out infinite',
          moveInCircleReverse: 'moveInCircle 20s ease-in-out reverse infinite',
          moveInCircleSlow: 'moveInCircle 40s linear infinite',
        },
        keyframes: {
          move: {
            '0%': { transform: 'translateX(-200px)' },
            '100%': { transform: 'translateX(200px)' },
          },
          moveHorizontal: {
            '0%': { transform: 'translateX(-50%) translateY(-10%)' },
            '50%': { transform: 'translateX(50%) translateY(10%)' },
            '100%': { transform: 'translateX(-50%) translateY(-10%)' },
          },
          moveVertical: {
            '0%': { transform: 'translateY(-50%)' },
            '50%': { transform: 'translateY(50%)' },
            '100%': { transform: 'translateY(-50%)' },
          },
          moveInCircle: {
            '0%': { transform: 'rotate(0deg)' },
            '50%': { transform: 'rotate(180deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
      },
    },
    plugins: [],
  };  