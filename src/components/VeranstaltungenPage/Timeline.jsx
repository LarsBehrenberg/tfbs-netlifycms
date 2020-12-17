import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { MdEventAvailable } from 'react-icons/md'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const EventContainer = styled.a`
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 1.5em;

  color: black;
  box-shadow: 0px 52px 85px rgba(0, 0, 0, 0.2033528);

  &,
  .read-more {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover {
    box-shadow: 0px 52px 85px rgba(0, 0, 0, 0.303528);
    .read-more {
      color: orange;
    }
  }

  .timeline-image-wrapper {
    width: 30%;
    margin-right: 20px;

    * {
      object-fit: contain;
      width: 100%;
      height: 100%;
      max-height: 250px;
    }
  }

  .timeline-text-wrapper {
    width: 70%;

    .timeline-event-description {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

      color: grey;
    }

    .read-more {
      text-align: right;
    }
  }
`

const Timeline = () => {
  const data = useStaticQuery(query)
  const veranstaltungen = data.markdownRemark.frontmatter.veranstaltungen_liste

  return (
    <VerticalTimeline>
      {veranstaltungen.map((event, index) => {
        const { title, date, link, description, thumbnail } = event
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{
              borderRadius: '0.5rem',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date={date}
            iconStyle={{ background: 'orange', color: '#fff' }}
            icon={<MdEventAvailable />}
          >
            <EventContainer href={link} target="_blank" rel="noopener referrer">
              <div className="timeline-image-wrapper">
                <Img
                  style={{
                    maxHeight: '250px',
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain',
                  }}
                  imgStyle={{
                    maxHeight: '250px',
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain',
                  }}
                  objectFit="contain"
                  fluid={thumbnail.childImageSharp.fluid}
                  alt={title}
                />
              </div>
              <div className="timeline-text-wrapper">
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <p className="timeline-event-description">{description}</p>
                <p className="read-more">Mehr hier &gt;</p>
              </div>
            </EventContainer>
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
          date
          description
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 250, traceSVG: { color: "#2B2B2F" }) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
