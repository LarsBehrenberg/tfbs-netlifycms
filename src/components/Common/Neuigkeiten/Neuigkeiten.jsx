import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Slider from 'react-slick'

// Components
import { Container, Content, SliderWrapper } from './components'

const Neuigkeiten = () => {
  return (
    <Container>
      <Content>
        <h4 className="component-subtitle">Neuigkeiten</h4>
        <h2 className="component-title">
          Erfahren Sie hier das Neueste von t.f.b.s - Telgte
        </h2>
      </Content>
      <SliderWrapper></SliderWrapper>
    </Container>
  )
}

export default Neuigkeiten

// const query = graphql`
//     query {

//     }
// `
