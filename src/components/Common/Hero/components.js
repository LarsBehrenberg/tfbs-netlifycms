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
  right: 2rem;
  bottom: 0;
  width: 800px;
  height: 300px;
  max-height: 80%;
  overflow: hidden;

  @media (max-width: ${props => props.theme.media.lg}) {
    width: 100%;
    min-width: 800px;

    left: -9999px;
    right: -9999px;
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
