import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import { Layout } from 'layout'
import { Breadcrumb } from 'components'

const TextContainer = styled.section`
  padding: 0 1rem;
  max-width: 1000px;
  margin: 0 auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0;
  }
`

const DatenschutzerklaerungPage = ({ data }) => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}
    <Breadcrumb currentPageTitle="Datenschutzerklärung" skillPage={false} />
    <TextContainer>
      <h1>Datenschutzerklärung</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </TextContainer>
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
