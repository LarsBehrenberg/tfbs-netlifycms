import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  margin-top: -1.5rem;
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

      .react-tabs__tab {
        position: relative;
        z-index: 5;
        background: #fff;

        border-radius: 5px;
        border: 0.3px solid #99999910;

        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &:hover {
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
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
