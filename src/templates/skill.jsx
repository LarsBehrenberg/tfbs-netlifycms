import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'layout'
import {
  Breadcrumb,
  SkillContainer,
  ContentTabs,
  ContactComponent,
  Background,
} from 'components'

const SkillPage = ({ data }) => {
  const { title, quote, tabs } = data.prismicSkill.data

  return (
    <Layout>
      {/* <SEO title="404: Not found" /> */}
      <Breadcrumb currentPageTitle={title.text} />
      <SkillContainer>
        <h1 className="skill_title">{title.text}</h1>
        <div
          className="skill_quote"
          dangerouslySetInnerHTML={{ __html: quote.html }}
        />
        {/* <div className="tabs"></div> */}
        <ContentTabs tabs={tabs} />
        <ContactComponent />
        <Background />
      </SkillContainer>
    </Layout>
  )
}

export default SkillPage

export const query = graphql`
  query skillPage($pathSlug: String!) {
    prismicSkill(data: { slug: { text: { eq: $pathSlug } } }) {
      data {
        title {
          text
        }
        quote {
          html
        }
        tabs {
          tab_title {
            text
          }
          tab_content {
            html
          }
        }
      }
    }
  }
`
