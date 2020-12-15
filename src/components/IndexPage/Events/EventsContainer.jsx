import React from 'react'
import { Container, Content, EventWrapper } from './components'

const EventsContainer = () => {
  return (
    <Container>
      <Content>
        <h4 className="subtitle">Unsere Veranstaltungen</h4>
        <h2 className="title">Erfahren Sie Mehr Über Unsere Veranstaltungen</h2>
      </Content>
      <EventWrapper>
        <span>hier sind demnächst die veranstaltungen</span>
      </EventWrapper>
    </Container>
  )
}

export default EventsContainer
