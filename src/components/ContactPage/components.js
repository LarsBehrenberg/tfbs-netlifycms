import styled from '@emotion/styled'

export const GridContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (min-width: 400px) {
    padding: 0 1rem;
  }

  @media screen and (min-width: 500px) {
    padding: 0 2rem;
  }

  position: relative;
  z-index: 2;

  display: grid;

  .title {
    margin-bottom: 1rem;
    margin-top: 0;
    text-transform: uppercase;
    font-weight: 700;

    &.form {
      color: ${({ theme }) => theme.colors.primaryDark};
    }

    &.info {
      margin-bottom: 3rem;
      color: #fff;
    }
  }

  .subtitle {
    margin-top: 0;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.25rem;
  }

  grid-template-columns: 2rem 1fr 2rem;
  grid-template-rows: min-content 2rem 1fr;

  /* Desktop styling */
  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 150px) 1fr;
    grid-template-rows: 30px 1fr 30px;
  }
`

export const BusinessInformation = styled.div`
  background: linear-gradient(305.81deg, #ff9934 8.81%, #ffb072 94.15%);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  border: 1px solid #99999920;

  /* Mobile styling */
  grid-column: 1 / 4;
  grid-row: 1 / 2;

  /* Desktop styling */
  @media screen and (min-width: 800px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;

    .information > * {
      margin-bottom: 3rem;
    }
  }

  /* Content */
  color: #fff;
  padding: 2rem;

  @media screen and (max-width: 800px) {
    .information {
      display: flex;
      flex-wrap: wrap;

      > *:not(:last-of-type) {
        margin-right: 1rem;
      }

      > * {
        margin-bottom: 1rem;
      }
    }
  }

  .socials {
    p {
      margin: 0;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }
    a {
      background: none;

      &:not(:first-of-type) {
        margin-left: 1em;
      }

      &:hover {
        svg {
          fill: #ffffff90;
        }
      }
    }
  }

  .online-beratung {
    p {
      margin: 0;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }
    a {
      color: #ff9934;
      padding: 0.4rem 0.5rem;
      text-shadow: none;
      background: #ffffff;
      border-radius: 50%;

      &:hover {
        color: #ff993480;
      }
    }
  }
`

export const FormContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 52px 85px rgba(0, 0, 0, 0.0873528);
  border-radius: 6px;
  border: 1px solid #99999920;

  padding: 2rem;

  .subtitle {
    max-width: 800px;
  }

  /* Mobile styling */
  grid-column: 1 / 4;
  grid-row: 3 / 4;

  /* Desktop styling */
  @media screen and (min-width: 800px) {
    grid-column: 2 / 4;
    grid-row: 1 / 4;

    padding-left: 200px;
  }

  @media screen and (max-width: 575px) {
    #recaptcha-google,
    #recaptcha-google > div,
    #recaptcha-google > div > div,
    #recaptcha-google > div > div > div,
    #recaptcha-google > div > div > div > div {
      transform: scale(0.95) !important;
      -webkit-transform: scale(0.95) !important;
      transform-origin: 0 0 !important;
      -webkit-transform-origin: 0 0 !important;
    }
  }
`

export const MapContainer = styled.section`
  width: 100vw;
  top: -5rem;
  height: 700px;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  &,
  * {
    position: relative;
    z-index: 1;
  }
`

export const InputWrapper = styled.div`
  display: block;
  margin: 1rem 0;
  position: relative;
  border-radius: 5px;
  input,
  textarea {
    padding: 1rem 2rem;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background: #f5f4f4;
    color: ${({ theme }) => theme.colors.grey};
    border-radius: 4px;
    outline-color: ${({ theme }) => theme.colors.primaryDark};
  }
  textarea {
    min-height: 10rem;
  }
  label {
    color: #999;
    padding: 1rem 2% 1rem 2%;
    position: absolute;
    top: 0;
    left: 2%;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    pointer-events: none;
  }
  input:focus ~ label,
  textarea:focus ~ label,
  input:valid ~ label,
  input[type='email']:placeholder-shown ~ label,
  textarea:valid ~ label {
    display: none;
  }

  @media (max-width: 650px) {
    input {
      height: 30px;
    }
    label {
      padding-top: 0.8rem;
    }
  }
`

export const ConsentCheckBox = styled.div`
  margin-bottom: 1rem;
  input {
    margin-right: 5px;
  }

  label {
    font-size: 0.8em;

    a {
      background: none;
    }
  }
`

export const SubmitButton = styled.button`
  color: #000;
  margin-top: 1rem;
  padding: 0.7rem 1rem;
  background: #fff;
  border-radius: 40px;
  border: none;
  outline: none;
  text-shadow: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);

  &[disabled] {
    cursor: not-allowed;
  }

  > div {
    display: inline-block;
    width: 22px;
    height: 22px;
    padding-left: 2px;
    padding-top: 4.5px;
    border-radius: 50%;
    margin: 0 10px 0 0;
    background: ${props => props.theme.colors.primaryDark};
    line-height: 0.8em;
  }

  span {
    color: #333333;
  }

  &:hover {
    box-shadow: 0 40px 45px rgba(0, 0, 0, 0.1);
  }
`
export const ContactBackground = styled.div`
  position: absolute !important;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 5rem;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  z-index: 0;
  background: #97979730;
`

export const KontaktContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  position: relative;
  margin-bottom: -5rem;
`
