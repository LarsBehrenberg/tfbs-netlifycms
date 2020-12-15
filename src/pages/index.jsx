import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'layout'
import {
  Hero,
  SkillsContainer,
  EventsContainer,
  ImageGridText,
  ContactComponent,
  Neuigkeiten,
} from 'components'

const IndexPage = ({ data }) => {
  const {
    hero_subtitle,
    hero_title,
    hero_button_text,
    hero_button_link,
    hero_images,
  } = data.prismicHomepage.data

  const {
    first_grid_image,
    second_grid_image,
    third_grid_image,
    text_title,
    text,
  } = data.prismicHomepageBodyThreeboxcomponent.primary

  return (
    <Layout>
      <Hero
        ovalMaskPosition="center"
        images={hero_images}
        title={hero_title.text}
        subtitle={hero_subtitle.text}
        button_title={hero_button_text.text}
        button_link={hero_button_link.text}
      />
      <Neuigkeiten />
      <ImageGridText />
      <SkillsContainer />
      <EventsContainer />
      {/* <ThreeBoxGrid /> */}
      <ImageGridText
        four_box_grid={false}
        title_class="primary"
        first_image={first_grid_image}
        second_image={second_grid_image}
        third_image={third_grid_image}
        title={text_title.text}
        html_text={text.html}
        slideIn="left"
        show_button={false}
      />
      <ContactComponent />
    </Layout>
  )
}

export default IndexPage

export const data = graphql`
  query IndexPage {
    prismicHomepage {
      data {
        hero_subtitle {
          text
        }
        hero_title {
          text
        }
        hero_button_text {
          text
        }
        hero_button_link {
          text
        }
        hero_images {
          hero_image {
            alt
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    prismicHomepageBodyThreeboxcomponent {
      primary {
        text_title {
          text
        }
        text {
          html
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
