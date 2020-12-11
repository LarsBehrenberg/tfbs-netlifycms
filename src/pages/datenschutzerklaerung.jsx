import React from 'react'
import styled from '@emotion/styled'

import { Layout } from 'layout'

const Placeholder = styled.div`
  height: 50vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const DatenschutzerklaerungPage = () => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}
    <Placeholder>
      <h1>Datenschutzerklärung</h1>
      <p>Not quite yet here ...</p>
    </Placeholder>
  </Layout>
)

export default DatenschutzerklaerungPage
