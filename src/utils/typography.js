import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'

fairyGatesTheme.googleFonts = [
  {
    name: 'Montserrat',
    styles: ['400, 500, 700'],
  },
  {
    name: 'Quattrocento Sans',
    styles: ['400', '400i', '700'],
  },
]

fairyGatesTheme.headerFontFamily = ['Montserrat', 'sans-serif']

fairyGatesTheme.overrideThemeStyles = ({ rhythm }, options) => {
  const linkColor = '#FF9934'
  return {
    a: {
      color: linkColor,
      textDecoration: 'none',
    },
    'p, li, span, a': {
      lineHeight: '1.4em',
    },
    'a:hover,a:active': {
      textShadow: 'none',
      backgroundImage: 'none',
    },
    // Blockquote styles.
    blockquote: {
      ...scale(1 / 5),
      borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
      paddingLeft: rhythm(10 / 16),
      fontStyle: 'italic',
      marginLeft: 0,
      marginRight: 0,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
  }
}

const typography = new Typography(fairyGatesTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
