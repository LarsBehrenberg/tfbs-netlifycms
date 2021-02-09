import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { SEO } from 'components'
import { Header, Footer } from 'layout'

// Styles
import '../styles/index.scss'

const ContentWrapper = styled.div`
  display: block;
  margin: 0 auto 2rem;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  position: relative;
`

const Layout = ({ children, title, description }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO title={title} description={description} />
      <div id="childWrapper">
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
