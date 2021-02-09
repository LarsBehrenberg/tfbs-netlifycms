import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

export const CardContainer = styled.div`
  display: flex;

  > a:first-of-type {
    margin-right: 4rem;
  }

  max-width: 1100px;

  margin: -1.5rem auto 3rem;

  @media screen and (max-width: 1000px) {
    margin: -1.5rem 2rem 3rem;
  }

  @media screen and (max-width: 850px) {
    margin: -1.5rem 1rem 3rem;

    > a:first-of-type {
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 750px) {
    margin: -1.5rem 4rem 3rem;

    > a:first-of-type {
      margin-right: 0;
    }

    > a:last-of-type {
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
  }

  .subtitle {
    font-weight: 500;
    text-transform: uppercase;
  }

  .name {
    margin-bottom: 1rem;
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

export const Card = styled(Link)`
  ${commonCardCSS}

  position: relative;
  transition: ${props => props.theme.transition};

  &:hover {
    box-shadow: ${props => props.theme.shadow.hover};
  }

  .name {
    color: ${props => props.theme.colors.primaryDark};
  }

  .description {
    margin-bottom: 2rem;
  }

  .page_link_container {
    background-color: ${props => props.theme.colors.primaryDark};
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: -13px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    display: grid;
    place-items: center;

    span {
      color: #ffffff;
      padding: 0.35rem 0.5rem;
      text-shadow: none;

      &:hover {
        color: #ffffff80;
      }
    }
  }
`

export const SingleCardContainer = styled.div`
  margin: -3rem auto 3rem;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  .single_card {
    ${commonCardCSS}
    padding: 0 2rem 2rem;
    margin: 0 3rem 2rem;

    .name {
      margin-bottom: 2rem;
      color: ${props => props.theme.colors.primaryDark};
      font-weight: normal;
      font-size: 2.5rem;
    }

    .description ul,
    .description ol {
      list-style: initial;

      @media screen and (max-width: 1000px) {
        padding: 0 1rem;
      }

      li {
        line-height: 1.625rem;
        margin-bottom: 1.5rem;
      }
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
