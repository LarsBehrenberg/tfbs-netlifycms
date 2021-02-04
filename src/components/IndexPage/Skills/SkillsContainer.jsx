import React from 'react'
import { Link } from 'gatsby'
import { FaMedkit, FaHandshake, FaGraduationCap, FaMale } from 'react-icons/fa'
import { FiRefreshCw } from 'react-icons/fi'
import { HiUserGroup } from 'react-icons/hi'

import {
  sliderSettings,
  Wrapper,
  CarouselBackground,
  StyledSlider,
  Child,
  Container,
  Content,
} from './components'

import '../../../styles/slick-carousel.css'

export default class SkillsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }

  next() {
    this.slider.slickNext()
  }

  previous() {
    this.slider.slickPrev()
  }

  render() {
    return (
      <>
        <Container
          // Possible slide in animation
          data-sal="slide-left"
          data-sal-duration="1000"
          data-sal-delay="100"
          data-sal-easing="easeInOutCubic"
        >
          {/* Text  */}
          <Content>
            <div className="content">
              <h2>Unsere Leistungen</h2>
              <h4>Erfahren Sie Mehr Über Unser Angebot</h4>
              <div
                className="text"
                dangerouslySetInnerHTML={{
                  __html:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui amet ac sit pellentesque. Nunc duis integer tristique in quis volutpat urna, senectus ut. Lectus eu faucibus erat arcu. ',
                }}
              />
            </div>
          </Content>

          {/* Slider */}
          <Wrapper>
            <div className="hide-overflow">
              <StyledSlider ref={c => (this.slider = c)} {...sliderSettings}>
                <Link to="/leistungen/apocoaching">
                  <div className="logo">
                    <FaMedkit size="30px" color="#939393" />
                  </div>
                  <h5 className="skill-title">apoCoaching</h5>
                </Link>
                <Link to="/leistungen/supervision-coaching">
                  <div className="logo">
                    <FiRefreshCw size="27px" color="#939393" />
                  </div>
                  <h5>Supervision / Coaching</h5>
                </Link>
                <Link to="/leistungen/beratung">
                  <div className="logo">
                    <FaHandshake size="30px" color="#939393" />
                  </div>
                  <h5 className="skill-title">Beratung</h5>
                </Link>
                <Link to="/leistungen/fortbildungen">
                  <div className="logo">
                    <FaGraduationCap size="30px" color="#939393" />
                  </div>
                  <h5 className="skill-title">Fortbildung</h5>
                </Link>
                <Link to="/leistungen/training">
                  <div className="logo">
                    <HiUserGroup size="30px" color="#939393" />
                  </div>
                  <h5 className="skill-title">Training</h5>
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
                </a>
              </StyledSlider>
            </div>
            <CarouselBackground />
          </Wrapper>
        </Container>
      </>
    )
  }
}
