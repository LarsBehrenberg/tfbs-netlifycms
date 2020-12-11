import React from 'react'
import ImageGrid from './ImageGrid'
import Text from './Text'
import { Container } from './components'
import { graphql, useStaticQuery } from 'gatsby'

const ImageGridText = ({
  slideIn = 'right',
  button_text,
  button_link,
  show_button = true,
  web_link,
  title,
  subtitle,
  html_text,
  first_image,
  second_image,
  third_image,
  title_class = 'black',
  four_box_grid = true,
  reversedOrder = false,
}) => {
  const data = useStaticQuery(defaultQuery)

  // Defining images
  const {
    first_grid_image,
    second_grid_image,
    third_grid_image,
  } = data.prismicHomepageBodyFourboxcomponent.primary
  const firstImage = first_image || first_grid_image
  const secondImage = second_image || second_grid_image
  const thirdImage = third_image || third_grid_image
  const images = [firstImage, secondImage, thirdImage]

  // Grid Title & Grid Subtitle
  const {
    grid_title,
    grid_subtitle,
  } = data.prismicHomepageBodyFourboxcomponent.primary

  // Text title & Text
  const {
    text_title,
    content_text,
  } = data.prismicHomepageBodyFourboxcomponent.primary

  // Button
  const button = {
    text:
      button_text ||
      data.prismicHomepageBodyFourboxcomponent.primary.button_text.text,
    link:
      button_link ||
      data.prismicHomepageBodyFourboxcomponent.primary.button_link.text,
    web_link:
      web_link || data.prismicHomepageBodyFourboxcomponent.primary.web_link,
  }

  return (
    <Container
      className={reversedOrder ? 'reversed-order' : ''}
      // Possible slide in animation
      data-sal={
        slideIn === 'right'
          ? 'slide-right'
          : slideIn === 'left'
          ? 'slide-left'
          : ''
      }
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="easeInOutCubic"
    >
      <ImageGrid
        images={images}
        grid_title={four_box_grid && grid_title.text}
        grid_subtitle={four_box_grid && grid_subtitle.text}
      />
      <Text
        button={show_button && button}
        title_class={title_class}
        subtitle={subtitle}
        title={title || text_title.text}
        html_text={html_text || content_text.html}
      />
    </Container>
  )
}

export default ImageGridText

const defaultQuery = graphql`
  query grid {
    prismicHomepageBodyFourboxcomponent {
      primary {
        text_title {
          text
        }
        content_text {
          html
        }
        grid_title {
          text
        }
        grid_subtitle {
          text
        }
        button_text {
          text
        }
        button_link {
          text
        }
        show_button
        web_link
        first_grid_image {
          localFile {
            ...FileFragment
          }
        }
        second_grid_image {
          localFile {
            ...FileFragment
          }
        }
        third_grid_image {
          localFile {
            ...FileFragment
          }
        }
      }
    }
  }

  fragment FileFragment on File {
    childImageSharp {
      fluid(maxWidth: 400, traceSVG: { color: "#2B2B2F" }) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`
