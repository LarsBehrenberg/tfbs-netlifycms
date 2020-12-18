import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Button from '../Button/Button'

const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
`

const BackgroundImage = styled.div`
  width: 100vw;
  position: relative;
  top: 0;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -0vw;
  min-height: 400px;

  .content-container {
    margin: 0 auto;
    z-index: 10;
    min-height: 400px;
    max-width: 1100px;
    padding: 0 2rem;
    width: auto;
    position: relative;

    .content {
      min-height: 400px;
      padding-left: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 500px;
      align-items: flex-start;

      @media screen and (max-width: 1100px) {
        max-width: 80vw;
      }

      /* @media screen and (max-width: 600px) {
        padding-right: 1rem;
      } */

      &,
      h2,
      h5 {
        color: white;
      }
      h2 {
        font-weight: 700;
        margin-top: 0;
      }
      h5 {
        line-height: 1.5em;
        margin-top: 0;
        margin-bottom: 1.2rem;
      }

      a {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  div:not(:first-of-type),
  img {
    max-height: 400px;

    @media screen and (min-width: 700px) {
      border-radius: 0 0.5rem 0.5rem 0;
    }

    position: absolute !important;
    top: 0;
    left: 0;
    right: 10vw;
    bottom: 0;
    background: linear-gradient(
      303.91deg,
      rgba(255, 183, 94, 0.72) 7.57%,
      rgba(255, 153, 52, 0.9) 94.39%
    );

    @media screen and (max-width: 700px) {
      right: 0;
    }
  }
`

const BackgroundShadow = styled.div`
  z-index: 2;
`

const defaultTitle = 'Erreichen Sie Uns Jetzt'
const defaultDescription =
  'Ob Informationen, Supervisionsanmeldungen, oder etwas ganz anderes, Sie erreichen uns jederzeit!'

const ContactComponent = ({
  weblink = false,
  title = defaultTitle,
  description = defaultDescription,
  link = '/kontakt',
  linkTitle = 'Zum Kontakt',
}) => {
  const { image } = useStaticQuery(query)
  return (
    <Container
      // Possible slide in animation
      data-sal="slide-right"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="easeInOutCubic"
    >
      <BackgroundImage>
        <div className="content-container">
          <div className="content">
            <h2>{title}</h2>
            <h5>{description}</h5>
            <Button weblink={weblink} to={link}>
              {linkTitle}
            </Button>
          </div>
        </div>

        <BackgroundShadow />
        <Img
          fluid={image.childImageSharp.fluid}
          alt="contact image"
          backgroundColor={`#040e1895`}
        />
      </BackgroundImage>
    </Container>
  )
}

export default ContactComponent

const query = graphql`
  query {
    image: file(absolutePath: { regex: "/images/contact.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800, traceSVG: { color: "#2B2B2F" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
