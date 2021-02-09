import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  margin-top: 1rem;

  @media (min-width: 550px) {
    margin-top: -1.5rem;
  }

  padding: 0 0rem 2rem;

  @media screen and (min-width: 500px) {
    padding: 0 2rem 2rem;
  }

  min-height: 65vh;
  position: relative;
  z-index: 5;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* TOP TABS */
  .table {
    /* Allowing to center the unordered list of tabs */
    display: table;
    margin: 0 auto;

    // Styling the list
    .react-tabs__tab-list {
      border: none;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;

      li:not(:last-of-type) {
        margin-right: 10px;
      }

      li {
        margin-bottom: 10px;
      }

      .react-tabs__tab {
        position: relative;
        z-index: 5;
        background: #fff;
        /* font-size: 0.9rem; */
        font-weight: bold;

        border-radius: 5px;
        border: 0.3px solid #99999910;

        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &:hover {
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        &:focus:after {
          background: none;
        }

        &.react-tabs__tab--selected:after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -10px;
          width: 0;
          height: 0;
          border-top: solid 10px #fff;
          border-left: solid 10px transparent;
          border-right: solid 10px transparent;
        }
      }
    }

    @media screen and (max-width: 500px) {
      display: block;

      .react-tabs__tab-list {
        flex-direction: column;

        .react-tabs__tab {
          margin-right: 0 !important;
          margin-left: 0 !important;
        }
      }
    }
  }

  /* BOTTOM PANELS */
  .panel {
    border-radius: 10px;
    min-height: 400px;
    border: 1px solid #99999910;
    display: none;
  }

  .react-tabs__tab-panel {
    max-width: 1000px;
    margin: 0 auto;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 1rem 0;
    }
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.5em;
    }
    h3 {
      font-size: 1.17em;
    }
    h4 {
      font-size: 1em;
    }
    h5 {
      font-size: 0.83em;
    }
    h6 {
      font-size: 0.75em;
    }

    ul,
    ol {
      list-style: initial;

      padding: 0 0 0 1rem;

      li {
        line-height: 1.625rem;
        margin-bottom: 1.5rem;
      }
    }
  }

  .react-tabs__tab-panel--selected {
    animation-name: fadeIn;
    animation-duration: 400ms;
    animation-timing-function: linear;
    display: block;
    padding: 2rem;
    background: #fff;

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`
