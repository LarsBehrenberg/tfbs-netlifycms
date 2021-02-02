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
    color: ${props => props.theme.colors.primaryDark};
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

export const Child = styled.a`
  max-width: 90%;
  padding: 0 2rem;
  min-height: 350px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border: 1px solid #99999910;
  border-radius: 0.5rem;

  outline: none;

  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  display: flex !important;
  flex-direction: row;
  align-items: center;

  &:first-of-type {
    margin-left: 5%;
  }

  &:hover {
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);

    span {
      color: ${props => props.theme.colors.primaryDark};
    }
  }

  &:hover {
    box-shadow: 0px 22px 30px rgba(0, 0, 0, 0.213528);
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

      color: grey;
    }
  }
  .read-more {
    text-align: right;
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
