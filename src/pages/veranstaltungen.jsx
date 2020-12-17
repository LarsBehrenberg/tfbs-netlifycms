import React from 'react'

import { Layout } from 'layout'
import { Neuigkeiten, Timeline } from 'components'
import { Header, BackButton } from '../components/NeuigkeitenPage/components'

const VeranstaltungenPage = () => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}

    <Header>
      <div className="wrapper">
        <BackButton to="/">&#8592;</BackButton>
        <h1>Neuigkeiten &amp; Veranstaltungen</h1>
      </div>
    </Header>
    <Neuigkeiten />
    <Timeline />
  </Layout>
)

export default VeranstaltungenPage
