import styled from '@emotion/styled'

const HeroContainerHeight = '500px'

export const Container = styled.div`
  width: 100%;
  position: relative;
`

export const HeroImage = styled.div`
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

export const HeroText = styled.div`
  position: absolute;

  &.right {
    right: 2rem;

    &.online-beratung {
      .text {
        left: 40%;
        margin-left: 1rem;
        transform: translate(-30%, -50%);

        h1 {
          margin-bottom: 1.3rem;
        }

        @media screen and (max-width: 550px) {
          margin-left: 0;
          bottom: -20%;
          h1 {
            margin-bottom: 0.6rem;
            text-align: center;
          }
          a {
            display: inline-block;
            left: 50%;
            position: relative;
            transform: translateX(-50%);
          }
        }
      }
    }
  }

  &.center {
    text-align: center;
    @media (min-width: ${props => props.theme.media.lg}) {
      left: 50%;
      transform: translateX(-50%);

      .text {
        bottom: 12%;
      }
    }
  }

  bottom: 0;
  width: 800px;
  height: 300px;
  max-height: 80%;
  overflow: hidden;

  @media (max-width: ${props => props.theme.media.lg}) {
    width: 100%;
    min-width: 800px;

    left: -9999px;
    right: -9999px !important;
    margin: 0 auto;
  }

  .text {
    position: absolute;
    max-width: 90vw;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    p {
      color: ${props => props.theme.colors.white};
      font-size: 1.1rem;
      margin: 0rem 0 1.4rem;
    }

    @media (max-width: ${props => props.theme.media.lg}) {
      top: auto;
      bottom: 0;
    }

    @media screen and (max-width: 550px) {
      p {
        margin: 0rem;
      }
      a {
        display: none;
      }
    }
  }

  .oval-background {
    width: 100%;
    height: 800px;
    top: 0%;
    border-radius: 50%;

    background: linear-gradient(119.65deg, #ff9934 15.65%, #ffb75e54 81%);
  }
`
