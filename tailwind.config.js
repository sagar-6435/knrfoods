/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9F2D20',
        dark: '#651C18',
        accent: '#E8A317',
        secondary: '#3F6B3A',
        background: '#FFF8EA',
        card: '#FFFFFF',
        'text-dark': '#2B211C',
        'text-muted': '#756A60',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
      }
    },
  },
  plugins: [],
}
