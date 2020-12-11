import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

// Icons
import { FaGraduationCap, FaMale } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'

// Components
import { StyledSlider } from '../../IndexPage/Skills/components'

const Container = styled.section`
  width: 100%;
  margin: 2rem 0 0rem;
  padding: 0 2rem;
  position: relative;

  @media screen and (min-width: 500px) {
    margin-bottom: 4rem;
  }
`

const Background = styled.div`
  position: absolute;
  top: 10px;
  bottom: calc(100% - 100px);
  left: 0;

  width: 100%;
  background: linear-gradient(90deg, #ff9934, #ffb072);
  border-radius: 0.5em;
`

const TitleContainer = styled.div`
  text-align: center;

  .component-title {
    color: ${props => props.theme.colors.primary};
  }
`

const SkillContainer = styled.div`
  position: relative;
  padding: 20px 1rem 0;
  display: flex;

  .side-skill-link {
    background: none;
    padding: 1.3rem 1rem 0.9rem;
    position: relative;
    outline: none;

    text-align: center;
    .logo {
      width: 100px;
      height: 100px;
      display: grid;
      place-content: center;
      border-radius: 50%;
      background: #99999950;
      margin: 0 auto 1.5rem;
    }

    .button {
      text-shadow: none;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      padding-top: 5px;

      background: linear-gradient(90deg, #ff9934, #ffb072);
      color: #fff;
      width: 30px;
      height: 30px;
      border-radius: 50%;

      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
`

const SideSkills = () => {
  return (
    <Container>
      <TitleContainer>
        <h4 className="component-subtitle">Sonstiges Angebot</h4>
        <h2 className="component-title">
          Erfahren Sie Mehr Über Unser Angebot
        </h2>
        <p className="grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.
        </p>
      </TitleContainer>
      <SkillContainer>
        <StyledSlider {...sliderSettings}>
          <Link to="/leistungen/training" className="side-skill-link">
            <div className="logo">
              <HiUserGroup size="30px" color="#939393" />
            </div>
            <h4 className="skill-title">Training</h4>
            <div className="button">&#x2192;</div>
          </Link>
          <Link to="/leistungen/fortbildung" className="side-skill-link">
            <div className="logo">
              <FaGraduationCap size="30px" color="#939393" />
            </div>
            <h4 className="skill-title">Fortbildung</h4>
            <div className="button">&#x2192;</div>
          </Link>
          <a
            href="http://www.psychotherapie-telgte.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="side-skill-link"
          >
            <div className="logo">
              <FaMale size="30px" color="#939393" />
            </div>
            <h4 className="skill-title">Psychotherapie</h4>
            <div className="button">&#x2192;</div>
          </a>
        </StyledSlider>
        <Background />
      </SkillContainer>
    </Container>
  )
}

export default SideSkills

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 0,
  initialSlide: 0,
  nextArrow: false,
  prevArrow: false,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
      },
    },
  ],
}
