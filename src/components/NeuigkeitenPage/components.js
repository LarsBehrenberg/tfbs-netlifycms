import styled from '@emotion/styled'

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
    max-width: 1200px;
    margin: auto;
    padding: 3rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      justify-content: initial;
      align-items: flex-start;

      h1 {
        margin-top: 1rem;
      }
    }
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

  h1 {
    position: relative;
    color: ${props => props.theme.colors.primaryDark};
    margin-bottom: 60px;
    font-size: 2.7rem;

    background: -webkit-linear-gradient(
      303.91deg,
      #ff9934 7.57%,
      #ffb072 94.39%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ::after {
      content: '';
      background: -webkit-linear-gradient(
        303.91deg,
        #ff9934 7.57%,
        #ffb072 94.39%
      );
      display: block;
      height: 6px;
      width: 100px;
      bottom: -20px;
      position: absolute;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 1rem 0;
  }

  @media screen and (min-width: 1000px) {
    padding: 3rem 4rem 2rem;
  }

  @media screen and (max-width: 500px) {
    /* margin: 0 0; */
  }
`
