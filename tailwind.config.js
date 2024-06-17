/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.html"],
  theme: {


    screens:{
      sm: "375px",
      md: '778px',
      lg: '1024px'
    },
    
    backgroundImage: {
      mobileSideBar: 'url(./images/bg-sidebar-mobile.s',
      desktopSideBar: 'url(./images/bg-sidebar-desktop.s'
    },
    extend: {
      colors: {
        // primary color

        marineBlue: 'hsl(213, 96%, 18%)',
        purplishBlue: 'hsl(243, 100%, 62%)',
        pastelBlue : 'hsl(228, 100%, 84%)',
        lightBlue: 'hsl(206, 94%, 87%)',
        strawberryRed: 'hsl(354, 84%, 57%)',

        // neutral color

        coolGray: 'hsl(231, 11%, 63%)',
        lightGray: 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)'
      }
    },
  },
  plugins: [],
}

