import React from 'react'

import { Layout } from 'layout'
import { Neuigkeiten, Timeline, BackButton } from 'components'
import { Header } from '../components/NeuigkeitenPage/components'

const VeranstaltungenPage = () => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}

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
