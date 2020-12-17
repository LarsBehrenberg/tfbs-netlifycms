import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'layout'
import { Breadcrumb } from 'components'

const ImpressumPage = ({ data }) => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}
    <Breadcrumb currentPageTitle="Impressum" skillPage={false} />
    <div style={{ padding: '0 2rem' }}>
      <h1>Impressum</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  </Layout>
)

export default ImpressumPage

export const query = graphql`
  query {
    markdownRemark(
      fileAbsolutePath: { regex: "/content/pages/impressum.md/" }
    ) {
      html
    }
  }
`
