import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Slider from 'react-slick'

// Components
import { Container, Content, SliderWrapper, Child } from './components'

// Styles
// import '../../../styles/slick-carousel.css'

const sliderSettings = {
  dots: true,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 2800,
  pauseOnHover: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: false,
  prevArrow: false,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
}

const Neuigkeiten = () => {
  const data = useStaticQuery(query)
  const allNeuigkeiten = data.allMarkdownRemark.nodes

  return (
    <Container>
      <Content>
        <h4 className="component-subtitle">Neuigkeiten</h4>
        <h2 className="component-title">
          Erfahren Sie hier das Neueste von t.f.b.s - Telgte
        </h2>
      </Content>
      <SliderWrapper>
        <Slider {...sliderSettings}>
          {allNeuigkeiten.map(node => {
            return (
              <Child key={node.id} to={`/${node.frontmatter.slug}`}>
                <h3>{node.frontmatter.title}</h3>
                <p className="grey">{`${node.frontmatter.description.substring(
                  0,
                  170,
                )}...`}</p>
                <span>Mehr hier &gt;</span>
              </Child>
            )
          })}
        </Slider>
      </SliderWrapper>
    </Container>
  )
}

export default Neuigkeiten

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/neuigkeiten/" } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          description
        }
      }
    }
  }
`
