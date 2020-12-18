import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const CardContainer = styled.div`
  display: flex;

  > div:first-of-type {
    margin-right: 4rem;
  }

  margin: -1.5rem 3rem 3rem;

  @media screen and (max-width: 1000px) {
    margin: -1.5rem 2rem 3rem;
  }

  @media screen and (max-width: 850px) {
    margin: -1.5rem 1rem 3rem;

    > div:first-of-type {
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 750px) {
    margin: -1.5rem 4rem 3rem;

    > div:first-of-type {
      margin-right: 0;
    }

    > div:last-of-type {
      margin-bottom: 7rem;
    }

    flex-direction: column-reverse;
  }

  @media screen and (max-width: 500px) {
    margin: -1.5rem 2rem 3rem;
  }

  @media screen and (max-width: 400px) {
    margin: -1.5rem 1rem 3rem;
  }
`

const commonCardCSS = css`
  align-self: flex-start;
  border-radius: 6px;
  z-index: 2;
  padding: 0 2rem;
  background: #fff;
  box-shadow: 0px 52px 85px rgba(0, 0, 0, 0.0873528);

  .image,
  .image * {
    margin: 0 auto;
    max-height: 120px;
    max-width: 120px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  .image {
    margin-top: -3rem;
  }

  .name,
  .subtitle {
    text-align: center;
    margin: 1rem auto;
  }

  .subtitle {
    line-height: 22px;
    font-weight: 500;

    text-transform: uppercase;

    color: #000000;
  }

  .name {
    line-height: 1.8rem;
    text-align: center;

    color: #ff9934;
  }
`

export const Header = styled.div`
  height: 150px;
  width: 100vw;
  background: linear-gradient(305.81deg, #ff9934 8.81%, #ffb072 94.15%);
  border-radius: 6px;

  position: relative;
  top: 0;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

export const Card = styled.div`
  ${commonCardCSS}

  .page_link_container {
    margin: 0 auto -0.5rem;
    text-align: center;
    .page_link {
      color: #ffffff;
      padding: 0.35rem 0.5rem;
      text-shadow: none;
      background: #ff9934;
      border-radius: 50%;

      &:hover {
        color: #ffffff80;
      }
    }
  }
`

export const SingleCardContainer = styled.div`
  margin: -3rem 0 3rem;
  display: flex;
  flex-direction: column;
  .single_card {
    ${commonCardCSS}
    padding: 0 2rem 2rem;
    margin: 0 3rem 2rem;

    .name {
      margin-bottom: 2rem;
    }

    @media screen and (min-width: 1000px) {
      padding: 0 4rem 3rem;
    }

    @media screen and (max-width: 500px) {
      margin: 0 0;
      padding: 0 1rem 1rem;
    }
  }
`

export const BackButton = styled.div`
  position: relative;
  margin: -5rem 0 5rem 5rem;
  z-index: 2;
  color: white;
  display: block;

  @media screen and (max-width: 700px) {
    margin: -5rem 0 5rem 3rem;
  }

  @media screen and (max-width: 500px) {
    margin: -6rem 0 6rem 1.5rem;
  }

  a {
    background: #fff;
    border-radius: 50%;
    text-shadow: none;
    padding: 0.35em 0.5em;
    background-image: none;

    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    &:hover {
      color: #ff993480;
    }
  }
`
