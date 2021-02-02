import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Slider from 'react-slick'
import { Button } from 'components'

import '../../../styles/slick-carousel.css'

const HeroContainerHeight = '500px'

const Container = styled.div`
  width: 100%;
  position: relative;
`

const TextContainer = styled.div`
  p {
    margin: 0.5rem 0 2rem;
  }
  &.center {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    color: white;
    overflow: hidden;

    .inner-container {
      position: relative;
      height: 100%;
      width: 100%;

      .oval-mask {
        position: absolute;
        border-radius: 50%;
        bottom: -400px;
        top: 170px;
        right: 0;
        left: calc(100% - 650px);
        z-index: 2;
        background: linear-gradient(119.65deg, #ff9934 15.65%, #ffb75e54 81%);

        .content {
          margin: 0;
          position: absolute;
          top: 23%;
          left: 50%;
          width: 100%;
          transform: translate(-28%, -50%);
        }
      }
    }
    @media screen and (max-width: 550px) {
      .inner-container .oval-mask {
        width: 100vw;
        position: absolute;
        z-index: 2;
        top: -25vw;
        bottom: -25vw;
        left: 60vw;
        right: -50vw;
        margin-left: -50vw;
        margin-right: -50vw;

        border-radius: 50%;

        background: linear-gradient(
          199.65deg,
          #ff9934 15.65%,
          rgba(255, 183, 94, 0.54) 81%
        );

        .content {
          top: 55%;
          height: 50%;
          left: 33vw;
          width: 70%;
          max-width: 70vw;
          overflow: hidden;
          h1,
          p {
            text-align: right;
            max-width: 100%;
          }
          a {
            float: right;
          }
          p {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }

  &.right {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    color: white;

    .overflow-hidden {
      width: 100vw;
      top: 0;
      bottom: 0;
      height: 100%;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      position: absolute;
      overflow: hidden;

      // Set Mask to Right hand side
      .oval-mask {
        width: 100vw;
        position: absolute;
        top: -25vw;
        bottom: -25vw;
        left: 100vw;
        right: -50vw;
        margin-left: -50vw;
        margin-right: -50vw;

        border-radius: 50%;

        background: linear-gradient(
          199.65deg,
          #ff9934 15.65%,
          rgba(255, 183, 94, 0.54) 81%
        );
        z-index: 2;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      height: 100%;
      padding: 2rem;
      z-index: 3;
      position: relative;

      h1 {
        color: white;
        font-weight: bold;
        margin-bottom: 1.5rem;
        max-width: 50%;
        text-align: right;
      }
    }

    @media screen and (max-width: 550px) {
      .overflow-hidden .oval-mask {
        left: 60vw;
      }

      .content {
        h1 {
          max-width: 100%;
        }
      }
    }
  }
`

const HeroImage = styled.div`
  width: 100vw;
  top: 0;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  position: relative;
  max-height: ${HeroContainerHeight};
  height: 100%;

  div,
  img {
    height: ${HeroContainerHeight};

    @media screen and (max-width: 550px) {
      height: 250px;
    }
  }
`

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
  ovalMaskPosition = 'center',
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

      <TextContainer className={ovalMaskPosition}>
        {ovalMaskPosition === 'center' ? (
          <div className="inner-container">
            <div className="oval-mask">
              <div className="content">
                <h1 className="header-title">{title}</h1>
                {subtitle ? <p>{subtitle}</p> : null}
                <Button weblink={weblink} to={button_link}>
                  {button_title}
                </Button>
              </div>
            </div>
          </div>
        ) : ovalMaskPosition === 'right' ? (
          <>
            <div className="content">
              <h1>{title}</h1>
              {subtitle ? <p>{subtitle}</p> : null}
              <Button weblink={weblink} to={button_link}>
                {button_title}
              </Button>
            </div>

            <div className="overflow-hidden">
              <div className="oval-mask" />
            </div>
          </>
        ) : null}
      </TextContainer>
    </Container>
  )
}

export default Hero
