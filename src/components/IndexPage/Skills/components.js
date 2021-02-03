import styled from '@emotion/styled'
import Slider from 'react-slick'
import { Link } from 'gatsby'

export const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 2800,
  pauseOnHover: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  nextArrow: false,
  prevArrow: false,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        infinite: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
      },
    },
  ],
}

export const Container = styled.section`
  width: 100%;
  margin: 1rem 0;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 900px) {
    max-width: 60%;
  }

  .hide-overflow {
    height: 100%;
    width: 100%;
    /* overflow-x: auto; */
    margin-top: 1rem;
  }
`

export const StyledSlider = styled(Slider)`
  position: relative;
  z-index: 2;
  width: 100%;

  .slick-list,
  .slick-track {
    height: 100%;
    max-height: 300px;
  }

  .slick-list {
    padding-top: 10px;
  }

  .slick-track {
    width: 600% !important;

    padding-bottom: 2rem !important;
  }

  .slick-slide {
    width: calc(16.66% - 1rem) !important;

    @media screen and (max-width: 700px) and (min-width: 500px) {
      width: calc(8.33% - 1rem) !important;
    }

    @media screen and (min-width: 700px) {
      width: calc(5.57% - 1rem) !important;
    }

    overflow: visible;
    margin: 0 0.5rem;

    &.slick-current {
      svg {
        color: ${props => props.theme.colors.primaryDark} !important;
      }
    }

    > div {
      width: 100%;

      background: #fff;
      border-radius: 0.5em;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);

      &,
      svg {
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      &:hover {
        box-shadow: 0 20px 15px rgba(0, 0, 0, 0.1);
        transform: scale(1.03);

        svg {
          color: ${props => props.theme.colors.primaryDark} !important;
        }
      }
    }
  }
`

export const CarouselBackground = styled.div`
  position: absolute;
  top: 10px;
  bottom: calc(70% - 10px);
  left: 0;

  width: 100%;
  background: linear-gradient(90deg, #ff9934, #ffb072);
  border-radius: 0.5em;
`

export const Child = styled(Link)`
  background: none;
  min-height: 180px;
  text-align: center;

  /* Center Items */
  padding-top: 30px;

  .logo {
    width: 70px;
    height: 70px;
    display: grid;
    place-content: center;
    border-radius: 50%;
    background: #99999950;
    margin: 0 auto 15px;
  }
`

export const Content = styled.div`
  padding: 1rem;
  display: flex;

  @media (min-width: 900px) {
    max-width: 40%;
  }

  @media (max-width: 750px) {
    padding: 1rem 0;
  }

  .content {
    margin-right: 1rem;

    h4 {
      color: ${props => props.theme.colors.primaryDark};
      margin-bottom: 1rem;
    }

    .text {
      margin-bottom: 1rem;
      line-height: 1.625rem;
    }

    button {
      background: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: none;
      outline: none;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        transform: scale(1.1);
      }

      &.previous {
        margin-right: 15px;
        border: 1px solid #33333370;
      }

      &.next {
        background: linear-gradient(90deg, #ff9934, #ffb072);
        color: #fff;
      }
    }
  }
`
