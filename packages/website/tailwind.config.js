module.exports = {
  future: {},
  purge: false,
  theme: {
    letterSpacing: {
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.06em',
      widest: '.1em',
    },
    extend: {
      colors: {
        navy: '#061838',
        orange: '#F39123',
        yellow: '#EABB26',
        blue: '#1E92D0',
        darkblue: '#030F24',
        offwhite: '#F7F7F7',
        footerblue: '#051531',
      },
      scale: {
        10: '0.1',
        15: '0.15',
        20: '0.2',
      },
      fontFamily: {
        sans: ['Source Sans Pro', '-apple-system', 'BlinkMacSystemFont'],
      },
      maxWidth: {
        570: '570px',
        1320: '1320px',
        100: '400px',
      },
      minWidth: {
        40: '160px',
      },
      width: {
        50: '200px',
        54: '216px',
        80: '360px',
        277: '277px',
      },
      opacity: {
        65: '0.65',
      },
      gridTemplateColumns: {
        'employees-sm': '216px 216px 216px',
        'employees-nine': '277px 277px 277px',
        'employees-lg': '277px 277px 277px 277px',
      },
      height: {
        90: '360px',
        70: '280px',
      },
      spacing: {
        '2px': '2px',
        '6px': '6px',
        '7': '28px',
        '9': '36px',
        '15': '60px',
        '25': '100px',
        '100': '400px',
      },
      lineHeight: {
        sm: '24px',
      },
      fontSize: {
        'sm': ['14px', '18px'],
        'base': ['16px', '26px'],
        'footer': ['18px', '30px'],
        'lg': ['20px', '22px'],
        'xl': ['22px', '34px'],
        '2xl': ['32px', '34px'],
        '3xl': ['36px', '46px'],
        '4xl': ['40px', '50px'],
        '5xl': ['62px', '72px'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'nine': '940px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    filter: ['responsive', 'hover', 'focus', 'group-hover'],
    fontWeight: ['last'],
  },
  plugins: [],
};
