import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

// Icons
import { FaMedkit, FaHandshake, FaGraduationCap, FaMale } from 'react-icons/fa'
import { FiRefreshCw } from 'react-icons/fi'
import { HiUserGroup } from 'react-icons/hi'

const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto 4rem;

  @media (max-width: ${props => props.theme.media.lg}) {
    margin: 2rem 2rem 4rem;
  }

  @media (min-width: ${props => props.theme.media.md}) {
    margin-top: -2rem;
  }
`

const Grid = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  @media (min-width: ${props => props.theme.media.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${props => props.theme.media.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-gap: 3rem;

  > a {
    text-align: center;
    padding: 4rem 1rem;
    background-color: ${props => props.theme.colors.white};

    position: relative;
    z-index: 3;
    border-radius: 0.375rem;

    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);

    &,
    svg {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .logo {
      width: 70px;
      height: 70px;
      display: grid;
      place-content: center;
      border-radius: 50%;
      background: #99999950;
      margin: 0 auto 20px;
    }

    .skill_button {
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: linear-gradient(
        ${props => props.theme.colors.primaryDark},
        ${props => props.theme.colors.primaryDark}
      );
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${props => props.theme.colors.white};
    }

    &:hover {
      box-shadow: 0 20px 15px rgba(0, 0, 0, 0.1);
      transform: scale(1.03);

      svg {
        color: ${props => props.theme.colors.primaryDark} !important;
      }
    }
  }
`

const SkillList = () => {
  return (
    <Container>
      <Grid>
        <Link to="apocoaching">
          <div className="logo">
            <FaMedkit size="30px" color="#939393" />
          </div>
          <h5 className="skill-title">apoCoaching</h5>
          <div className="skill_button">
            <span>&#x2192;</span>
          </div>
        </Link>
        <Link to="supervision-coaching">
          <div className="logo">
            <FiRefreshCw size="27px" color="#939393" />
          </div>
          <h5>Supervision / Coaching</h5>
          <div className="skill_button">
            <span>&#x2192;</span>
          </div>
        </Link>
        <Link to="beratung">
          <div className="logo">
            <FaHandshake size="30px" color="#939393" />
          </div>
          <h5 className="skill-title">Beratung</h5>
          <div className="skill_button">
            <span>&#x2192;</span>
          </div>
        </Link>
        <Link to="fortbildungen">
          <div className="logo">
            <FaGraduationCap size="30px" color="#939393" />
          </div>
          <h5 className="skill-title">Fortbildung</h5>
          <div className="skill_button">
            <span>&#x2192;</span>
          </div>
        </Link>
        <Link to="training">
          <div className="logo">
            <HiUserGroup size="30px" color="#939393" />
          </div>
          <h5 className="skill-title">Training</h5>
          <div className="skill_button">
            <span>&#x2192;</span>
          </div>
        </Link>
        <a
          href="https://psychotherapie-telgte.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="logo">
            <FaMale size="30px" color="#939393" />
          </div>
          <h5 className="skill-title">Psychotherapie</h5>
          <div className="skill_button">
            <span>&#x2192;</span>
          </div>
        </a>
      </Grid>
    </Container>
  )
}

export default SkillList
