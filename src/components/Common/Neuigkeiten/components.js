import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Container = styled.section`
  width: 100%;
  margin: 1rem 0;
  padding: 2rem 2rem 0;
`

export const Content = styled.div`
  margin: 0 auto;
  text-align: center;

  .component-title {
    color: ${props => props.theme.colors.primary};
  }
`

export const SliderWrapper = styled.div`
  margin-top: 2rem;

  .slick-track {
    padding: 0rem 0 2rem 0;
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

export const Child = styled(Link)`
  max-width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border: 1px solid #99999910;
  border-radius: 0.5rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding: 2rem;
  text-align: center;

  h3 {
    margin-top: 0;
  }

  span {
    color: #000;
  }

  &:first-of-type {
    margin-left: 5%;
  }

  &:hover {
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);

    span {
      color: ${props => props.theme.colors.primary};
    }
  }
`
