const theme = {
  maxWidth: '1366px',
  media: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
  colors: {
    primaryDark: '#FF9934',
    primaryLight: '#ffb75e',
    greyLight: '#979797',
    greyDark: '#6d6d6d',
    blackLight: '#191919',
    black: '#000000',
    white: '#ffffff',
  },
  fontSize: {
    nav: '0.9rem', // 12px
    text: '1rem', // 16px
    button: '1.125rem', // 18px
    title: '1.125rem    ', // 18px
    subtitle: '2.25rem', // 36px
    newsTitle: '1.5rem', // 24px
    textTitle: '2rem', // 32px
    headerTitle: '4rem', // 64px
  },
  shadow: {
    standard: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    hover: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);',
  },
}

export default theme

// 480px: Mobile devices.
// 481px — 768px: iPads, Tablets.
// 769px — 1024px: Small screens, laptops.
// 1025px — 1200px: Desktops, large screens.
// 1201px and more — Extra large screens, TV.
