import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'layout'
import { SingleEmployee, ContactComponent } from 'components'

const EmployeePage = ({ data }) => {
  const employee = data.prismicEmployee.data

  return (
    <Layout>
      {/* <SEO title="404: Not found" /> */}
      <SingleEmployee employee={employee} />
      <ContactComponent />
    </Layout>
  )
}

export default EmployeePage

export const query = graphql`
  query EmployeePage($pathSlug: String!) {
    prismicEmployee(data: { slug: { text: { eq: $pathSlug } } }) {
      data {
        name {
          text
        }
        subtitle {
          text
        }
        description {
          html
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
`
