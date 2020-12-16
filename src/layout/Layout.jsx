import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import Header from './Header'
import Footer from './Footer'

// Styles
import '../styles/normalize.css'
import '../styles/index.css'

const ContentWrapper = styled.div`
  display: block;
  margin: 0 auto 2rem;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  position: relative;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div id="childWrapper">
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
