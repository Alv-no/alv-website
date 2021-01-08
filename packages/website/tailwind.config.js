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
        lightnavy: 'rgba(6, 24, 56, 0.3)',
        tag: '#83959F',
        tagbg: '#F5F7F8',
        orange: '#F39123',
        navynav: '#061838',
        bordergray: '#f2f2f3',
        lightblue: '#132442',
        postgray: '#0618384E',
        servicesgray: '#06183805',
        yellow: '#EABB26',
        blue: '#1E92D0',
        darkblue: '#030F24',
        offwhite: '#F7F7F7',
        footerblue: '#051531',
      },
      fontFamily: {
        sans: ['Source Sans Pro', '-apple-system', 'BlinkMacSystemFont'],
      },
      maxWidth: {
        '90': '360px',
        '100': '400px',
        '277px': '277px',
        '570': '570px',
        '615': '615px',
        'grid': '1152px',
        '1000': '1000px',
        '1200': '1200px',
        '1320': '1320px',
        '1400': '1400px',
        '1440': '1440px',
        '1600': '1600px',
      },
      minWidth: {
        40: '160px',
      },
      boxShadow: {
        filter: '0px 0px 20px #00000015',
      },
      width: {
        50: '200px',
        54: '216px',
        60: '240px',
        80: '360px',
        100: '400px',
        277: '277px',
        140: '560px',
        slider: '768px',
        featured: '572px',
      },
      opacity: {
        0: '0',
        20: '0.20',
        30: '0.30',
        35: '0.35',
        55: '0.55',
        60: '0.60',
        65: '0.65',
        70: '0.70',
        80: '0.80',
        90: '0.90',
      },
      gridTemplateColumns: {
        'slider-md': '75% 25%',
        'videos-lg': '20% 80%',
        'videos-hero': '25% 75%',
        'videos': 'repeat(4, minmax(220px, 278px))',
        'blog-xs': 'minmax(180px, 300px)',
        'employees-xs': '1fr',
        'employees-sm': 'minmax(216px, 1fr) minmax(216px, 1fr)',
        'blog-sm': 'repeat(2, minmax(240px, 310px))',
        'employees-md': 'repeat(3, minmax(216px, 1fr))',
        'employees-lg': 'repeat(4, minmax(216px, 1fr))',
        'blog-nine': 'repeat(3, minmax(250px, 270px))',
        'filter-lg': 'auto 240px',
        'filter': '1fr',
      },
      height: {
        '50': '200px',
        '54': '216px',
        '60': '240px',
        '70': '280px',
        '80': '320px',
        '85': '340px',
        '90': '360px',
        '100': '400px',
        '120': '480px',
        '130': '520px',
        '140': '560px',
        '160': '640px',
        '60vw': '60vw',
        'slider': '440px',
        'featured': '343px',
      },
      spacing: {
        '1vw': '1vw',
        '2vw': '2vw',
        '3vw': '3vw',
        '4vw': '4vw',
        '5vw': '5vw',
        '7vw': '7vw',
        '8vw': '8vw',
        '10vw': '10vw',
        '15vw': '15vw',
        '20vw': '20vw',
        '2px': '2px',
        '3px': '3px',
        '6px': '6px',
        '7': '28px',
        '9': '36px',
        '15': '60px',
        '18': '72px',
        '25': '100px',
        '30': '120px',
        '35': '140px',
        '100': '400px',
        '130c': '130%',
        '177c': '177%',
        '60c': '60%',
      },
      scale: {
        10: '0.1',
        15: '0.15',
        20: '0.2',
        60: '.60',
        65: '.65',
        70: '.70',
        80: '.80',
        90: '.90',
        95: '.95',
        110: '1.1',
        120: '1.2',
        130: '1.3',
        140: '1.4',
      },
      lineHeight: {
        sm: '24px',
      },
      fontSize: {
        'xs': ['10px', '10px'],
        'sm': ['14px', '18px'],
        'video': ['16px', '22px'],
        'base': ['16px', '26px'],
        'footer': ['18px', '30px'],
        'mobile': ['18px', '28px'],
        'lg': ['20px', '22px'],
        'about': ['24px', '24px'],
        'xl': ['22px', '34px'],
        'nav': ['26px', '34px'],
        'cta-section': ['26px', '34px'],
        'blog': ['30px', '42px'],
        '2xl': ['32px', '34px'],
        '3xl': ['36px', '46px'],
        '4xl': ['40px', '50px'],
        '5xl': ['62px', '72px'],
        'about-xl': ['42px', '54px'],
        'slider': ['46px', '50px'],
        'cta': ['26px', '26px'],
      },
      translate: {
        '1/7': '14.2857143%',
        '1/4': '25%',
        '3/4': '75%',
        '1/3': '33%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      screens: {
        'xs': '480px',
        'five': '550px',
        'sm': '640px',
        'seven': '700px',
        'md': '768px',
        'eight': '800px',
        'nine': '930px',
        'lg': '1024px',
        'twelve': '1200px',
        'xl': '1280px',
        '2xl': '1440px',
        '1600': '1600px',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: [
      'responsive',
      'hover',
      'focus',
      'group-focus',
      'group-hover',
      'checked',
    ],
    translate: ['active', 'responsive', 'hover', 'focus', 'group-hover'],
    spacing: ['active', 'first', 'responsive', 'hover', 'focus', 'group-hover'],
    filter: ['responsive', 'hover', 'focus', 'group-hover'],
    fontWeight: ['last'],
    scale: ['active', 'responsive', 'hover', 'focus', 'group-hover'],
    fill: ['hover', 'focus', 'group-hover'],
  },
  plugins: [],
};
