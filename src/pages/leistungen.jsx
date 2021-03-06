import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'layout'
import { Hero, SkillList, ContactComponent } from 'components'

const LeistungenPage = ({ data }) => {
  const { hero_title, hero_image } = data.prismicLeistungen.data
  return (
    <Layout
      title="Leistungen"
      description="Seit 2000 ist t.f.b.s. – Telgte tätig mit den Schwerpunkten Arbeits- und Organisationspsychologie, Coaching und Supervision, Beratung inhabergeführter Familienunternehmen, Apothekenberatung, Teamentwicklung, Personalentwicklung, Strategieplanung, Schulentwicklung & Psychotherapie."
    >
      {/* <SEO title="404: Not found" /> */}
      <Hero
        textPosition="center"
        fluid_image={hero_image.localFile.childImageSharp.fluid}
        title={hero_title.text}
      />
      {/* <div id="leistungen" style={{ height: '2rem' }} /> */}
      <SkillList />
      <ContactComponent />
    </Layout>
  )
}

export default LeistungenPage

export const query = graphql`
  query LeistungenPage {
    prismicLeistungen {
      data {
        hero_title {
          text
        }
        hero_button_text {
          text
        }
        hero_button_link {
          text
        }
        hero_image {
          ...PrismicLeistungenDataHero_imageFragment
        }
        haupt_leistungen {
          title {
            text
          }
          subtitle {
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
          first_grid_image {
            localFile {
              ...FileFragmentLeistungen
            }
          }
          second_grid_image {
            localFile {
              ...FileFragmentLeistungen
            }
          }
          third_grid_image {
            localFile {
              ...FileFragmentLeistungen
            }
          }
        }
      }
    }
  }

  fragment PrismicLeistungenDataHero_imageFragment on PrismicLeistungenDataHero_image {
    localFile {
      childImageSharp {
        fluid(maxWidth: 1000, traceSVG: { color: "#2B2B2F" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }

  fragment FileFragmentLeistungen on File {
    childImageSharp {
      fluid(maxWidth: 400, traceSVG: { color: "#2B2B2F" }) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`
