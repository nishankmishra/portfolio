module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      colors: {
        ink: '#08080d',
        surface: '#0f0f17',
        surface2: '#14141f',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(139, 92, 246, 0.35)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        floaty: 'floaty 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}