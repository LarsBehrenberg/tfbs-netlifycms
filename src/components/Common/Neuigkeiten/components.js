import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Container = styled.section`
  width: 100%;
  margin: 3rem 0 1rem;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 600px;
  text-align: center;

  h2 {
    color: ${props => props.theme.colors.blackLight};
  }

  h4 {
    color: ${props => props.theme.colors.primaryDark};
    font-weight: 500;
  }
`

export const SliderWrapper = styled.div`
  margin-top: 2.5rem;
  * {
  }
  .slick-track {
    padding: 0rem 0 2rem 0;
  }

  @media (min-width: 700px) {
    .slick-track {
      padding: 0rem 0 4rem 0;
    }
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
  box-shadow: ${props => props.theme.shadow.standard};
  border: 1px solid #99999910;
  border-radius: 0.5rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding: 2rem;
  text-align: center;

  h5 {
    color: ${props => props.theme.colors.blackLight};
  }

  p {
    color: ${props => props.theme.colors.greyDark};
    margin: 1.5rem 0;
  }

  span {
    color: ${props => props.theme.colors.blackLight};
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:first-of-type {
    margin-left: 5%;
  }

  &:hover {
    box-shadow: ${props => props.theme.shadow.hover};

    span {
      color: ${props => props.theme.colors.primaryDark};
    }
  }
`
