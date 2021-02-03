import styled from '@emotion/styled'

export const Container = styled.section`
  width: 100%;
  margin: 6rem 0 2rem;
`

export const Content = styled.div`
  margin: 0 auto;
  text-align: center;

  h4 {
    color: ${props => props.theme.colors.primaryDark};
  }
`

export const SliderWrapper = styled.div`
  padding: 0 4rem;

  .slick-track {
    padding: 3rem 0;
    display: flex;
    align-items: center;
  }

  .slick-slide {
    /* max-height: 100px */
  }

  .slick-dots {
    li,
    button::before {
      background: linear-gradient(
        303.91deg,
        rgba(255, 153, 52, 0.4) 7.57%,
        rgba(255, 176, 114, 0.4) 94.39%
      );
      height: 6.9px;
      width: 50px;
      content: '';
    }

    .slick-active button::before {
      content: '';
      background: linear-gradient(303.91deg, #ff9934 7.57%, #ffb072 94.39%);
    }
  }
`

export const Child = styled.a`
  /* @media (min-width: 500px) {
    max-width: 90%;
  } */
  max-width: 95%;
  margin: 0 auto;
  > div {
    max-width: 80%;
    margin: auto;
  }
  &,
  * {
    max-height: 130px;
  }
`
