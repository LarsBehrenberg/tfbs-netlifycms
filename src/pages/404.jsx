import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { Layout } from 'layout'

const Placeholder = styled.div`
  height: 53vh;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;

  display: grid;
  place-content: center;
  text-align: center;
  h1 {
    color: ${props => props.theme.colors.black};
    margin-bottom: 1rem;
  }

  a {
    color: ${props => props.theme.colors.primaryDark};
  }
`

const NotFoundPage = () => (
  <Layout title="404 - Not found">
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>
    <Placeholder>
      <h1>404 | NOT FOUND</h1>
      <p>
        Leider nichts gefunden... Finde hier <Link to="/">zurück</Link>!
      </p>
    </Placeholder>
  </Layout>
)

export default NotFoundPage
