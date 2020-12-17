import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'layout'
import { Breadcrumb } from 'components'

const ImpressumPage = () => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}
    <Breadcrumb currentPageTitle="Impressum" skillPage={false} />
    <div style={{ padding: '0 2rem' }}>
      <h1>Impressum</h1>
    </div>
  </Layout>
)

export default ImpressumPage

// export data = graphql
