import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Timeline = () => {
  const data = useStaticQuery(query)

  const veranstaltungen = data.markdownRemark.frontmatter.veranstaltungen_liste

  console.log(veranstaltungen)
  return (
    <VerticalTimeline>
      {veranstaltungen.map((event, index) => {
        const { title, link, description, thumbnail } = event
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              boxShadow: '0px 52px 85px rgba(0, 0, 0, 0.203528)',
              borderRadius: '0.5rem',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            // date="2011 - present"
            iconStyle={{ background: 'orange', color: '#fff' }}
          >
            <div></div>
            <div>
              <h3 className="vertical-timeline-element-title">{title}</h3>
              {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
              <p>{description}</p>
              <p>Mehr hier &gt;</p>
            </div>
          </VerticalTimelineElement>
        )
      })}
    </VerticalTimeline>
  )
}

export default Timeline

const query = graphql`
  query VeranstaltungenPage {
    markdownRemark(
      fileAbsolutePath: { regex: "/content/pages/veranstaltungen.md/" }
    ) {
      frontmatter {
        veranstaltungen_liste {
          title
          link
          description
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
