import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'layout'
import { ImageGridText, EmployeeList, ContactComponent } from 'components'

const UeberUnsPage = ({ data }) => {
  const { employees } = data.prismicUberUns.data
  return (
    <Layout
      title="Über uns"
      description="Seit über 20 Jahren ist t.f.b.s. - Telgte tätig mit Schwerpunkten wie Arbeits- und Organisationspsychologie Beratung inhabergeführter Familienunternehmen, Apothekenberatung und vielem mehr."
    >
      <EmployeeList employees={employees} />
      <ImageGridText />
      <ContactComponent />
    </Layout>
  )
}

export default UeberUnsPage

export const query = graphql`
  query UeberUnsPage {
    prismicUberUns {
      data {
        employees {
          name {
            text
          }
          subtitle {
            text
          }
          description {
            html
          }
          page_link {
            text
          }
          profile_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 150, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
