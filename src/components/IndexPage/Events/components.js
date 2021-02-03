import styled from '@emotion/styled'

export const Container = styled.section`
  width: 100%;
  margin: 2rem 0;
`

export const Content = styled.div`
  margin: 0 auto;
  text-align: center;

  h4 {
    color: ${props => props.theme.colors.primaryDark};
  }
`

export const SliderWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;

  .slick-track {
    padding: 0rem 0 2rem 0;
  }

  @media (min-width: 500px) {
    margin-bottom: 1rem;
    .slick-track {
      padding: 0rem 0 3.3rem 0;
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

export const Child = styled.a`
  max-width: 90%;
  padding: 2rem;
  min-height: 350px;

  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  box-shadow: ${props => props.theme.shadow.standard};
  border: 1px solid #99999910;
  border-radius: 0.5rem;

  outline: none;

  display: flex !important;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:first-of-type {
    margin-left: 5%;
  }

  &:hover {
    box-shadow: ${props => props.theme.shadow.hover};

    .read-more {
      color: orange;
    }
  }

  .timeline-image-wrapper {
    width: 30%;
    margin-right: 30px;

    * {
      object-fit: contain;
      width: 100%;
      height: 100%;
      max-height: 250px;
    }

    @media screen and (max-width: 550px) {
      display: none;
    }
  }

  .event-text-wrapper {
    height: 100%;
    @media screen and (min-width: 550px) {
      width: 70%;
    }

    .event-title {
      margin-top: 0;
    }

    .event-description {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

      color: ${props => props.theme.colors.grey};
      margin: 1.5rem 0;
    }
  }
  .read-more {
    text-align: right;
    margin-top: auto;
    margin-bottom: 0;
    color: black;
  }
`

export const ButtonWrapper = styled.div`
  margin: 1rem auto 0;

  @media screen and (max-width: 700px) {
    margin-top: 2rem;
  }
  display: flex;
  justify-content: center;
`
