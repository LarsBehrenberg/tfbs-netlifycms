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

const ImpressumPage = ({ data }) => (
  <Layout
    title="Impressum"
    description="Seit 2000 ist t.f.b.s. – Telgte tätig mit den Schwerpunkten Arbeits- und Organisationspsychologie, Coaching und Supervision, Apothekenberatung ..."
  >
    <Breadcrumb currentPageTitle="Impressum" skillPage={false} />
    <TextContainer>
      <h1>Impressum</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </TextContainer>
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
