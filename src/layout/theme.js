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
    grey: '#808080',
    greyDark: '#6d6d6d',
    blackLight: '#191919',
    black: '#000000',
    white: '#ffffff',
  },
  fontSize: {
    nav: '1rem', // 16px
    text: '1rem', // 16px
    button: '1.125rem', // 18px
    title: '1.125rem    ', // 18px
    subtitle: '2.25rem', // 36px
    newsTitle: '1.5rem', // 24px
    textTitle: '2rem', // 32px
    headerTitle: '4rem', // 64px
  },
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  shadow: {
    standard: '0 15px 25px rgba(0, 0, 0, 0.2)',
    hover: '0 30px 35px rgba(0, 0, 0, 0.1)',
  },
}

export default theme

// 480px: Mobile devices.
// 481px — 768px: iPads, Tablets.
// 769px — 1024px: Small screens, laptops.
// 1025px — 1200px: Desktops, large screens.
// 1201px and more — Extra large screens, TV.
