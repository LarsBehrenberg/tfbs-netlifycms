import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'

fairyGatesTheme.googleFonts = [
  {
    name: 'Montserrat',
    styles: ['400', '500', '700'],
  },
  {
    name: 'Quattrocento Sans',
    styles: ['400', '400i', '700'],
  },
]

fairyGatesTheme.headerFontFamily = ['Montserrat', 'sans-serif']

const typography = new Typography(fairyGatesTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
