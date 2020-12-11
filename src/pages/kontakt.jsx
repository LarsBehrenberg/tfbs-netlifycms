import React from 'react'

import { Layout } from 'layout'
import {
  ContactForm,
  Map,
  KontaktContainer,
  ContactBackground,
} from 'components'

const KontaktPage = () => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}
    <KontaktContainer>
      <ContactForm />
      <Map />
      <ContactBackground />
    </KontaktContainer>
  </Layout>
)

export default KontaktPage
