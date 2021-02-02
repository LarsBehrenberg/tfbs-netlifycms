import React from 'react'
import styled from '@emotion/styled'
import LogoImage from '../images/logo.png'
import { Link } from 'gatsby'
import {
  FaFacebookF,
  FaTwitter,
  FaXing,
  FaEnvelope,
  FaLinkedinIn,
} from 'react-icons/fa'

const Container = styled.footer`
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 1.45rem 1.0875rem;
`

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #99999970;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    min-height: 170px;
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
    background: none;

    color: #00000040;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.primaryDark}90;
    }

    &:first-of-type {
      color: ${props => props.theme.colors.primaryDark};
    }
  }

  @media screen and (max-width: 550px) {
    margin-top: 1em;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    min-height: 70px;
    flex-wrap: wrap;
  }
`

const CopyrightAndSocials = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0 0;

  .design-by {
    a {
      font-weight: bold;
      color: #000;
      background: none;

      &:hover {
        color: ${props => props.theme.colors.primaryDark}90;
      }
    }
  }

  .socials {
    display: flex;
    align-items: center;
    a {
      margin-left: 1em;
      background: none;

      &:first-of-type {
        color: ${props => props.theme.colors.primaryDark};
      }

      &:hover {
        svg {
          fill: ${props => props.theme.colors.primaryDark}90;
        }
      }
    }
  }

  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: 0 auto;
    min-height: 120px;
    text-align: center;
  }
`

const Footer = () => {
  return (
    <Container>
      <Navbar>
        <Logo to="/">
          <img src={LogoImage} alt="tfbs logo" />
        </Logo>
        <Menu className="desktop-menu">
          <Link to="/ueber-uns">Über uns</Link>
          <Link to="/kontakt">Kontakt</Link>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
        </Menu>
      </Navbar>

      <CopyrightAndSocials>
        <h6 className="design-by">
          t.f.b.s - Telgte &copy; {new Date().getFullYear()} | Design By @{' '}
          <a
            href="https://larsbehrenberg.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lars Behrenberg
          </a>
        </h6>
        <div className="socials">
          <a
            href="https://www.facebook.com/coachingTelgte/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size="1.3em" color="#99999970" />
          </a>

          <a
            href="https://twitter.com/coachingtelgte"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size="1.3em" color="#99999970" />
          </a>

          <a
            href="https://de.linkedin.com/in/michael-fa%C3%9Fnacht-57b782132"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size="1.3em" color="#99999970" />
          </a>

          <a
            href="https://www.xing.com/companies/beratungspraxistraining-fortbildung-beratung-supervision"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXing size="1.3em" color="#99999970" />
          </a>

          <a
            href="mailto:info@tfbs.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size="1.3em" color="orange" />
          </a>
        </div>
      </CopyrightAndSocials>
    </Container>
  )
}

export default Footer
