module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        // '601px': '601px',
        '1136px': '1136px',
        '1080px': '1080px',
        '842px': '52.6rem',
        '601px': '37.5rem',
        '556px': '556px',
        '487px': '487px',
        '440px': '440px',
        '430px': '430px',
        '427px': '427px',
        '360px': '360px',
        '307px': '307px',
        '283px': '283px',
        '200px': '200px',
        '179px': '179px',
        '175px': '175px',
        '157px': '157px',
        '128px': '128px',
        '90px': '90px',
        '65px': '65px',
        '60px': '60px',
        '59px': '59px',
        '56px': '56px',
        '36px': '36px',
        '30px': '30px',
        '28px': '28px',
        '20px': '20px',
        '19px': '19px',
        '16px': '16px',
        '10px': '10px'
      },
      maxWidth: {
        '1200px': '1200px',
        '1136px': '1136px',
        '1664.8px': '1664.8px',
        '1920px': '1920px'
      },
      letterSpacing: {
        '20px': '20px'
      }
    }
  },
  variants: {
    extend: { backgroundColor: ['active'] }
  },
  plugins: []
}
