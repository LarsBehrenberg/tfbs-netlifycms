import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'layout'
import { ImageGridText, EmployeeList } from 'components'

const UeberUnsPage = ({ data }) => {
  const { employees } = data.prismicUberUns.data
  return (
    <Layout>
      {/* <SEO title="404: Not found" /> */}
      <EmployeeList employees={employees} />
      <ImageGridText />
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
