import React from 'react'

import { Layout } from 'layout'
import {
  ContactForm,
  Map,
  KontaktContainer,
  ContactBackground,
} from 'components'

const KontaktPage = () => (
  <Layout
    title="Kontakt"
    description="Ob Informationen, Supervisionsanmeldungen, oder etwas ganz anderes, Sie erreichen uns jederzeit! Ob Coaching und Supervision, Beratung inhabergeführter Familienunternehmen, Apothekenberatung, Teamentwicklung, Personalentwicklung, Strategieplanung, Schulentwicklung & Psychotherapie."
  >
    <KontaktContainer>
      <ContactForm />
      <Map />
      <ContactBackground />
    </KontaktContainer>
  </Layout>
)

export default KontaktPage
