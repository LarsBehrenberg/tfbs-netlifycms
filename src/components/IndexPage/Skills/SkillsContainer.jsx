import React from 'react'
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
              <h4 className="component-subtitle">Unsere Leistungen</h4>
              <h2 className="component-title">
                Erfahren Sie Mehr Über Unser Angebot
              </h2>
              <div
                className="normal-text grey"
                dangerouslySetInnerHTML={{
                  __html:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui amet ac sit pellentesque. Nunc duis integer tristique in quis volutpat urna, senectus ut. Lectus eu faucibus erat arcu. ',
                }}
              />
              {/* <div style={{ float: 'right' }}>
                <button className="previous" onClick={this.previous}>
                  &#x2190;
                </button>
                <button className="next" onClick={this.next}>
                  &#x2192;
                </button>
              </div> */}
            </div>
          </Content>

          {/* Slider */}
          <Wrapper>
            <div className="hide-overflow">
              <StyledSlider ref={c => (this.slider = c)} {...sliderSettings}>
                <Child to="/leistungen">
                  <div className="logo">
                    <FaMedkit size="30px" color="#939393" />
                  </div>
                  <h4 className="skill-title">apoCoaching</h4>
                </Child>
                <Child to="/leistungen">
                  <div className="logo">
                    <FiRefreshCw size="27px" color="#939393" />
                  </div>
                  <h4>Supervision / Coaching</h4>
                </Child>
                <Child to="/leistungen">
                  <div className="logo">
                    <FaHandshake size="30px" color="#939393" />
                  </div>
                  <h4 className="skill-title">Beratung</h4>
                </Child>
                <Child to="/leistungen">
                  <div className="logo">
                    <FaGraduationCap size="30px" color="#939393" />
                  </div>
                  <h4 className="skill-title">Fortbildung</h4>
                </Child>
                <Child to="/leistungen">
                  <div className="logo">
                    <HiUserGroup size="30px" color="#939393" />
                  </div>
                  <h4 className="skill-title">Training</h4>
                </Child>
                <Child to="/leistungen">
                  <div className="logo">
                    <FaMale size="30px" color="#939393" />
                  </div>
                  <h4 className="skill-title">Psychotherapie</h4>
                </Child>
              </StyledSlider>
            </div>
            <CarouselBackground />
          </Wrapper>
        </Container>
      </>
    )
  }
}
