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
    width: '100vw',
  },
  bmMenu: {
    background: '#fefefe',
    padding: '0 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#000',
    padding: '1.2em 0 0',
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
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.nav};
    text-transform: capitalize;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }

    &.currentActiveLink {
      color: ${({ theme }) => theme.colors.primaryDark};
      position: relative;

      @media (min-width: ${({ theme }) => theme.media.lg}) {
        ::after {
          content: '';
          background: -webkit-linear-gradient(
            303.91deg,
            #ff9934 7.57%,
            #ffb072 94.39%
          );
          display: block;
          height: 3px;
          width: 100%;
          bottom: -30px;
          position: absolute;
        }
      }
    }
  }

  & > div:last-of-type {
    display: none;
    position: relative;
  }

  @media (max-width: ${({ theme }) => theme.media.lg}) {
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

  /* .cta {
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    transition: ${({ theme }) => theme.transition};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.primaryDark};
    }
  } */
`

const StyledMobileMenu = styled(MobileMenu)`
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    display: none;
  }
  text-align: center;

  a {
    text-shadow: none;
    padding: 1rem 0;
    display: inline-block;
    background: none;
    border-bottom: 1px solid #33333330;

    &:last-of-type,
    &:first-of-type {
      border-bottom: none;
    }
  }

  .mobile-footer-links {
    /* border: 1px solid black; */
    display: flex;

    padding: 3.5rem 0 0.9rem !important;
    border-bottom: 1px solid #33333330;

    a {
      font-size: 0.85em;
      padding: 0;

      &:first-of-type {
        margin-right: 10px;
      }
    }
  }

  .mobile-footer-credits {
    font-size: 0.85em;
    padding: 1rem 0 0.2rem !important;

    a {
      padding: 0;
      text-decoration: underline;
      color: grey;
    }
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
    <Link to="/kontakt" className="cta" activeClassName="currentActiveLink">
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
          <Logo to="/">
            <img src={LogoImage} alt="tfbs logo" />
          </Logo>
          <MenuLinks />
          <div className="mobile-footer-links">
            <Link to="/impressum" activeClassName="currentActiveLink">
              Impressum
            </Link>
            <Link
              to="/datenschutzerklaerung"
              activeClassName="currentActiveLink"
            >
              Datenschutzerklärung
            </Link>
          </div>
          <p className="mobile-footer-credits">
            t.f.b.s - Telgte © {new Date().getFullYear()} | Design By @{' '}
            <a
              href="https://larsbehrenberg.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lars Behrenberg
            </a>
          </p>
        </StyledMobileMenu>
      </div>
    </Wrapper>
  </div>
)

export default Header
