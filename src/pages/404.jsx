import React from 'react'
import styled from '@emotion/styled'

import { Layout } from 'layout'

const Placeholder = styled.div`
  height: 70vh;
  width: 100%;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const NotFoundPage = () => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}
    <Placeholder>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Placeholder>
  </Layout>
)

export default NotFoundPage
