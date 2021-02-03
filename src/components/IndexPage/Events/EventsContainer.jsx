import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'react-slick'

// Components
import {
  Container,
  Content,
  SliderWrapper,
  Child,
  ButtonWrapper,
} from './components'
import { Button } from 'components'

// Slider settings
const sliderSettings = {
  dots: true,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 2800,
  pauseOnHover: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: false,
  prevArrow: false,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
}

const EventsContainer = () => {
  const data = useStaticQuery(query)
  const veranstaltungen = data.markdownRemark.frontmatter.veranstaltungen_liste
  return (
    <Container>
      <Content>
        <h2>Unsere Veranstaltungen</h2>
        <h4>Erfahren Sie Mehr Über Unsere Veranstaltungen</h4>
      </Content>
      <SliderWrapper>
        <Slider {...sliderSettings}>
          {veranstaltungen.map(event => {
            const { title, link, description, thumbnail } = event
            return (
              <Child
                key={title}
                href={link}
                target="_blank"
                rel="noopener referrer"
              >
                <div className="timeline-image-wrapper">
                  <Img
                    style={{
                      maxHeight: '250px',
                      height: '100%',
                      width: '100%',
                      objectFit: 'contain',
                    }}
                    imgStyle={{
                      maxHeight: '250px',
                      height: '100%',
                      width: '100%',
                      objectFit: 'contain',
                    }}
                    objectFit="contain"
                    fluid={thumbnail.childImageSharp.fluid}
                    alt={title}
                  />
                </div>
                <div className="event-text-wrapper">
                  <h5 className="event-title">{title}</h5>
                  <p className="event-description">{description}</p>
                  <p className="read-more">Mehr hier &gt;</p>
                </div>
              </Child>
            )
          })}
        </Slider>
      </SliderWrapper>
      <ButtonWrapper>
        <Button to="/veranstaltungen">Alle Veranstaltungen</Button>
      </ButtonWrapper>
    </Container>
  )
}

export default EventsContainer

const query = graphql`
  query {
    markdownRemark(
      fileAbsolutePath: { regex: "/content/pages/veranstaltungen.md/" }
      frontmatter: {
        veranstaltungen_liste: { elemMatch: { featured: { eq: true } } }
      }
    ) {
      frontmatter {
        veranstaltungen_liste {
          title
          link
          description
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 250, traceSVG: { color: "#2B2B2F" }) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
