import { Link } from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'
import LogoImage from '../images/logo.png'
import { slide as MobileMenu } from 'react-burger-menu'

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '30px',
    height: '25px',
    right: '5px',
    top: '18px',
  },
  bmBurgerBars: {
    background: '#000000',
  },
  bmBurgerBarsHover: {
    background: '#333333',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '0',
  },
  bmMenu: {
    background: 'rgb(22, 27, 46)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: 'white',
    padding: '1.2em',
    display: 'flex',
    flexDirection: 'column',
  },
  bmItem: {
    display: 'inline-block',
    padding: '2rem 0',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: '0',
    left: '0',
    width: '100vw',
  },
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;

  a {
    color: black;
    text-decoration: none;
    text-shadow: none;
    background: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & > div:last-of-type {
    display: none;
    position: relative;
  }

  @media (max-width: 1000px) {
    .desktop-menu {
      display: none;
    }

    & > div:last-of-type {
      display: initial;
    }
  }
`

const Logo = styled(Link)`
  margin: 0;
  background: none;

  img {
    max-width: 200px;
    margin: 0;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 1.5rem;
  }

  a.currentActiveLink {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const StyledMobileMenu = styled(MobileMenu)`
  @media (min-width: 1000px) {
    display: none;
  }

  h1 {
    color: white;
    padding-bottom: 0.5rem !important;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  }

  a {
    text-shadow: none;
    color: #fff;
    padding: 1rem 0;
    display: inline-block;
    background: none;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  }
`

const MenuLinks = () => (
  <>
    <Link to="/" activeClassName="currentActiveLink">
      Home
    </Link>
    <Link to="/leistungen" activeClassName="currentActiveLink">
      Leistungen
    </Link>
    <Link to="/online-beratung" activeClassName="currentActiveLink">
      Online Beratung
    </Link>
    <Link to="/veranstaltungen" activeClassName="currentActiveLink">
      Veranstaltungen
    </Link>
    <Link to="/ueber-uns" activeClassName="currentActiveLink">
      Über uns
    </Link>
    <Link to="/kontakt" activeClassName="currentActiveLink">
      Kontakt
    </Link>
  </>
)

const Header = () => (
  <div>
    <Wrapper>
      <Logo to="/">
        <img src={LogoImage} alt="tfbs logo" />
      </Logo>
      <Menu className="desktop-menu">
        <MenuLinks />
      </Menu>

      <div>
        <StyledMobileMenu styles={styles} right disableAutoFocus>
          <h1>t.f.b.s - Telgte</h1>
          <MenuLinks />
        </StyledMobileMenu>
      </div>
    </Wrapper>
  </div>
)

export default Header
