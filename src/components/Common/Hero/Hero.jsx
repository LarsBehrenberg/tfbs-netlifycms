import React from 'react'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import { Button } from 'components'
import { Container, HeroImage, HeroText } from './components'

import '../../../styles/slick-carousel.css'

const sliderSettings = {
  dots: false,
  infinite: true,
  fade: true,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 2800,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}

const Hero = ({
  fluid_image,
  images,
  title,
  subtitle,
  button_title,
  button_link,
  weblink = false,
}) => {
  return (
    <Container>
      {images ? (
        <HeroImage>
          <Slider {...sliderSettings}>
            {images.map(image => (
              <Img
                fluid={image.hero_image.localFile.childImageSharp.fluid}
                alt={image.hero_image.alt}
                backgroundColor={`#040e1895`}
                objectFit="cover"
                key={image.hero_image.alt}
                style={{ height: '100%', objectFit: 'cover' }}
              />
            ))}
          </Slider>
        </HeroImage>
      ) : (
        <HeroImage>
          <Img fluid={fluid_image} alt={title} backgroundColor={`#040e1895`} />
        </HeroImage>
      )}

      <HeroText className>
        <div className="text">
          <h1>{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}

          {button_title && button_link ? (
            <Button weblink={weblink} to={button_link}>
              {button_title}
            </Button>
          ) : null}
        </div>

        <div className="oval-background" />
      </HeroText>
    </Container>
  )
}

export default Hero
