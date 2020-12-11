import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { Container } from './Components'
import 'react-tabs/style/react-tabs.css'

const ContentTabs = ({ tabs }) => {
  return (
    <Container>
      <Tabs>
        <div className="table">
          <TabList>
            {tabs.map(({ tab_title }) => (
              <Tab key={tab_title.text}>{tab_title.text}</Tab>
            ))}
          </TabList>
        </div>

        {tabs.map(({ tab_content }, index) => (
          <TabPanel
            key={`tab-panel-${index}`}
            dangerouslySetInnerHTML={{ __html: tab_content.html }}
          />
        ))}
      </Tabs>
    </Container>
  )
}

export default ContentTabs
