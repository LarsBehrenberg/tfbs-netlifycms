import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'layout'
import { ContentTabs, Hero, ContactComponent } from 'components'

const OnlineBeratungPage = ({ data }) => {
  const {
    tabs,
    hero_title,
    hero_button_text,
    hero_button_link,
    hero_image,
  } = data.prismicOnlineBeratung.data
  return (
    <Layout>
      <Hero
        ovalMaskPosition="right"
        fluid_image={hero_image.localFile.childImageSharp.fluid}
        title={hero_title.text}
        button_title={hero_button_text.text}
        weblink={true}
        button_link={hero_button_link.text}
      />
      <ContentTabs tabs={tabs} />
      <ContactComponent
        weblink={true}
        link={hero_button_link.text}
        linkTitle="Zur Online Beratung"
        title="Machen Sie Jetzt Ihren Termin"
        description="Ob Informationen, Supervisionsanmeldungen, oder etwas ganz anderes, Sie erreichen uns jederzeit!"
      />
    </Layout>
  )
}

export default OnlineBeratungPage

export const data = graphql`
  query OnlineBeratungPage {
    prismicOnlineBeratung {
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
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, traceSVG: { color: "#2B2B2F" }) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        tabs {
          tab_title {
            text
          }
          tab_content {
            html
          }
        }
      }
    }
  }
`
