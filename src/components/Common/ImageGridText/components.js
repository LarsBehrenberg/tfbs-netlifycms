import styled from '@emotion/styled'

export const Container = styled.section`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  &.reversed-order {
    flex-direction: row-reverse;
  }

  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
`

export const Content = styled.div`
  width: 100%;
  padding: 2rem 0rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1000px) {
    padding: 2rem;
  }

  @media screen and (max-width: 750px) {
    padding: 0 2rem 2rem;
    /* margin-top: 2rem; */
  }

  .content {
    .subtitle {
      text-transform: uppercase;
    }

    .title {
      font-weight: bold;
      margin-top: 0;
      &.black {
        color: #000000;
      }
      &.primary {
        color: ${props => props.theme.colors.primary};
      }
    }

    @media (min-width: 750px) {
      max-width: 370px;
    }

    h2,
    > div {
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding-left: 0;
      margin-left: 0.3em;
    }
    li {
      position: relative;
      padding-left: 2em; /* space to preserve indentation on wrap */
    }
    li:before {
      content: ''; /* placeholder for the SVG */
      position: absolute;
      left: 0; /* place the SVG at the start of the padding */
      top: 0px;
      width: 1.4em;
      height: 1.4em;
      border-radius: 50%;
      background: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg width='19' fill='orange' height='18' viewBox='-350 -450 1750 1950' xmlns='http://www.w3.org/2000/svg'><path d='M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z'/></svg>")
          no-repeat,
        ${props => props.theme.colors.primary}33;
    }
  }
`

export const GridContainer = styled.div`
  width: 100%;
  padding: 2rem 2rem;

  @media screen and (max-width: 750px) {
    padding: 2rem 1rem 0;
  }

  @media screen and (max-width: 400px) {
    padding: 2rem 1rem;
  }
`

export const Grid = styled.div`
  max-height: 400px;

  @media screen and (min-width: 750px) {
    margin-top: 4rem;
  }

  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  transition: all 0.4s ease-out;

  div {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
  }

  &:hover {
    transform: scale(1.04);
  }

  &.three_box_grid {
    @media screen and (max-width: 750px) {
      margin-bottom: -2rem;
    }
    .image-1 {
      grid-column: 2 / 10;
      grid-row: 2 / 9;
      z-index: 1;
    }

    .image-2 {
      grid-column: 4 / 19;
      grid-row: 7 / 17;
      z-index: 2;
    }

    .image-3 {
      grid-column: 12 / 21;
      grid-row: 1 / 8;
      z-index: 1;
    }
  }

  &.four_box_grid {
    .text-container {
      grid-column: 1 / 11;
      grid-row: 1 / 14;

      @media (max-width: 500px) {
        grid-column-end: 15;
      }

      background: linear-gradient(119.65deg, #ff9934, #ffb75e);
      z-index: 3;

      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1em;

      h2,
      h4 {
        color: white;
        margin: 0;
      }

      h4 {
        margin-top: 0.5rem;
        margin-bottom: 0.2rem;
        font-weight: 500;
        font-size: 0.9rem;
        text-transform: uppercase;
      }
    }

    .image-1 {
      grid-column: 2 / 10;
      grid-row: 13 / 20;
      z-index: 1;
    }

    .image-2 {
      grid-column: 7 / 21;
      grid-row: 8 / 19;
      z-index: 2;
    }

    .image-3 {
      grid-column: 9 / 19;
      grid-row: 2 / 9;
      z-index: 1;
    }
  }
`
