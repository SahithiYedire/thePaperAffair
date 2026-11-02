export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#F6DCE5',
        dusty: '#D99AAE',
        ivory: '#FFF9F5',
        cream: '#F8EFE7',
        brown: '#59433F',
        rosewood: '#8A5B67'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(89, 67, 63, 0.08)'
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Segoe UI', 'sans-serif']
      }
    }
  },
  plugins: []
};
