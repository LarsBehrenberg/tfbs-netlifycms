import React from 'react'

import { Layout } from 'layout'
import { Neuigkeiten, Timeline, BackButton } from 'components'
import { Header } from '../components/NeuigkeitenPage/components'

const VeranstaltungenPage = () => (
  <Layout
    title="Veranstaltungen & Neuigkeiten"
    descrpition="Wir freuen uns darauf, Sie bei unseren Veranstaltungen begrüßen zu dürfen. Bei Fragen oder weiteren Themenwünschen kontaktieren Sie uns gerne!"
  >
    <Header>
      <div className="wrapper">
        <BackButton />
        <h1>Neuigkeiten &amp; Veranstaltungen</h1>
      </div>
    </Header>
    <Neuigkeiten />
    <Timeline />
  </Layout>
)

export default VeranstaltungenPage
