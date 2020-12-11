import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Background = () => {
  const data = useStaticQuery(query)
  const defaultImage = data.backgroundImage.childImageSharp.fluid
  return (
    <BackgroundImage
      fluid={defaultImage}
      className="skill_background"
    ></BackgroundImage>
  )
}

export default Background

export const query = graphql`
  query Background {
    backgroundImage: file(relativePath: { eq: "skill-background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100, traceSVG: { color: "#2B2B2F" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
