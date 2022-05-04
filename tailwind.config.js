module.exports = {
  content: ['./app/**/*.php', './resources/**/*.{php,vue,js}'],
  theme: {
    extend: {
      colors: {
        'rojo': '#FE5E35',
      },
      fontSize: {
        'tel-titulares':['26px', '36px'],
        'tel-texto': ['16px', '22px'],
        'tel-pie': ['12px', '15px'],
        'pad-titulares':['28px', '34px'],
        'pad-texto':['18px', '25px'],
        'pad-pie':['12px', '14px'],
        '1280-titulares':['32px', '38px'],
        '1280-texto': ['20px', '28px'],
        '1280-pie': ['14px', '16px'],
        'titulares': ['36px', '42px'],
        'texto': ['24px', '32px'],
        'pie': ['15px', '18px'],
        '1920-titulares':['42px', '54px'],
        '1920-texto': ['28px', '38px'],
        '1920-pie': ['18px', '22px'],
      },
      screens:{
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
