/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Manrope', 'sans-serif'],
          heading: ['Manrope', 'sans-serif'],
        },
        colors: {
          primary: {
            50: '#f0f7ff',
            100: '#e0eefe',
            200: '#bcdafd',
            300: '#90c2fc',
            400: '#5fa0f9',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          },
          secondary: {
            50: '#f5f7fa',
            100: '#ebeef5',
            200: '#dde1ed',
            300: '#c5cbd9',
            400: '#a3acc2',
            500: '#8590af',
            600: '#6b7594',
            700: '#5a6279',
            800: '#4a5163',
            900: '#2d3748',
          },
        },
        boxShadow: {
          'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
        },
        animation: {
          'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
          'fade-in': 'fadeIn 0.6s ease-out forwards',
        },
        keyframes: {
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  }
  