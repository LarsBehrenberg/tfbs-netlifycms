import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 100%;
  padding: 2rem 0rem;
  position: relative;

  .skill_header {
    max-width: 1000px;
    margin: 1rem auto 0;

    @media screen and (max-width: 1100px) {
      margin: 0 2rem;
    }

    .skill_title {
      display: inline-block;
      background: -webkit-linear-gradient(
        303.91deg,
        #ff9934 7.57%,
        #ffb072 94.39%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      position: relative;
      z-index: 1;

      margin-bottom: 60px;

      &::after {
        content: '';
        background: -webkit-linear-gradient(
          303.91deg,
          #ff9934 7.57%,
          #ffb072 94.39%
        );
        display: block;
        height: 6px;
        width: 80px;
        bottom: -20px;
        position: absolute;
      }
    }

    .skill_quote {
      max-width: 800px;
      color: #00000090;
      margin-bottom: 4rem;
      position: relative;
      z-index: 1;

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 1rem 0;
      }
    }
  }
`

const SkillContainer = ({ children }) => <Container>{children}</Container>

export default SkillContainer
