import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import Img from 'gatsby-image'

// Components
import { Container, SliderWrapper, Content, Child } from './components'

const sliderSettings = {
  dots: true,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 2800,
  pauseOnHover: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  nextArrow: false,
  prevArrow: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
}

export default function Netzwerke() {
  const {
    allPrismicNetzwerk: { nodes },
  } = useStaticQuery(query)

  return (
    <Container>
      <Content>
        <h4 className="component-subtitle">Partner & Netzwerke</h4>
        <h2 className="component-title">
          Erfahren Sie Mehr Über Unsere Partner
        </h2>
      </Content>
      <SliderWrapper>
        <Slider {...sliderSettings}>
          {nodes.map(node => {
            const { weblink, logo_image } = node.data

            return (
              <Child
                key={node.id}
                href={weblink.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img
                  style={{
                    objectFit: 'contain',
                    height: '100%',
                    width: '100%',
                  }}
                  objectFit="contain"
                  fluid={logo_image.localFile.childImageSharp.fluid}
                  alt={logo_image.alt}
                />
              </Child>
            )
          })}
        </Slider>
      </SliderWrapper>
    </Container>
  )
}

export const query = graphql`
  query Netzwerke {
    allPrismicNetzwerk {
      nodes {
        id
        data {
          logo_image {
            alt
            localFile {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          weblink {
            url
          }
        }
      }
    }
  }
`
