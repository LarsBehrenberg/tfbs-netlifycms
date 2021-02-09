import React from 'react'
import { Helmet } from 'react-helmet'

import { Layout } from 'layout'
import { ContactForm, Map } from 'components'

const DankePage = () => (
  <Layout title="Kontakt">
    <Helmet>
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <ContactForm danke />
    <Map />
  </Layout>
)

export default DankePage
