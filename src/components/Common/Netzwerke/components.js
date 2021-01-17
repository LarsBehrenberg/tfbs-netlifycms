import styled from '@emotion/styled'

export const Container = styled.section`
  width: 100%;
  margin: 1rem 0;
  padding: 2rem;
`

export const Content = styled.div`
  margin: 0 auto;
  text-align: center;

  .component-title {
    color: ${props => props.theme.colors.primary};
  }
`

export const SliderWrapper = styled.div`
  .slick-track {
    padding: 0;
    display: flex;
    align-items: center;
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
  border-radius: 0.5rem;
  padding: 2.3rem;
`
