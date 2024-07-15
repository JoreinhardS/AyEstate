/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        sora: ['Sora', 'sans-serif'],
        playball: ['Playball', 'cursive']
      },
      colors:{
        maincolor: '#B7E08A',
        secondcolor: '#818B9C',
        tan: '#F6F3F3',
        black: '#0B0F0E',
        lightgrey: '#F6F3F3',
        white: '#FFFFFF',
        primary: {
          500: '#3b82f6',
        },
      },
      fontSize: {
        'sm2': '0.875rem',
        sm: '1rem',
        base: '1.125rem', //18px
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '5rem',
        '5vw': '5vw',
        '10vw': '10vw'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        'max-w-250px': {'max': '250px'},
        'max-w-300px': {'max': '300px'},
      },
      backgroundImage: {
        'custom-bg-top-left': "url('/asset/Abstract2.png')",
        'custom-bg-bottom-right': "url('/asset/Abstract.png')"
      },
      backgroundPosition: {
        'top-left': 'top left',
        'bottom-right': 'bottom right',
      },
      boxShadow: {
        'custom-shadow': '0px 4px 120px 0px rgba(151, 159, 183, 0.20)',
      },
    },
  },
  plugins: [],
}
