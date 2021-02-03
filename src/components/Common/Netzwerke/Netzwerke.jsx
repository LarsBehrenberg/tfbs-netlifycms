import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import Img from 'gatsby-image'

// Components
import { Container, SliderWrapper, Content, Child } from './components'

const sliderSettings = {
  dots: false,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 2800,
  pauseOnHover: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: false,
  prevArrow: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
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
        <h2>Partner & Netzwerke</h2>
        <h4>Erfahren Sie Mehr Über Unsere Partner</h4>
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
                  imgStyle={{ objectFit: 'contain' }}
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
                fluid(maxWidth: 200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
