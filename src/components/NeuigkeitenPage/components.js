import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Header = styled.div`
  width: 100vw;
  background: linear-gradient(305.81deg, #ff9934 8.81%, #ffb072 94.15%);
  border-radius: 6px;

  position: relative;
  top: 0;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  .wrapper {
    max-width: 1100px;
    margin: auto;
    padding: 2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 500px) {
      flex-direction: column;
      justify-content: initial;
      align-items: flex-start;
    }

    h1 {
      color: #fff;
      text-align: right;
      max-width: 800px;
    }
  }
`

export const BackButton = styled(Link)`
  width: 35px;
  height: 35px;
  background: #fff;
  border-radius: 50%;
  text-shadow: none;
  padding: 0.25em 0.4em;
  @media screen and (max-width: 500px) {
    padding: 0.45em 0.5em;
  }
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
`

export const Content = styled.div`
  margin: -1.5rem auto 3rem;
  max-width: 1000px;
  position: relative;
  background: #fff;
  z-index: 2;
  padding: 2rem;
  box-shadow: 0px 52px 85px rgba(0, 0, 0, 0.0873528);
  border-radius: 0.5rem;

  @media screen and (min-width: 1000px) {
    padding: 3rem 4rem 2rem;
  }

  @media screen and (max-width: 500px) {
    /* margin: 0 0; */
  }
`
