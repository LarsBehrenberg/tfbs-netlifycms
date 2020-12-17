import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'layout'
import { Breadcrumb } from 'components'

const DatenschutzerklaerungPage = ({ data }) => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}
    <Breadcrumb currentPageTitle="Datenschutzerklärung" skillPage={false} />
    <div style={{ padding: '0 2rem' }}>
      <h1>Datenschutzerklärung</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  </Layout>
)

export default DatenschutzerklaerungPage

export const query = graphql`
  query {
    markdownRemark(
      fileAbsolutePath: { regex: "/content/pages/datenschutzerklaerung.md/" }
    ) {
      html
    }
  }
`
