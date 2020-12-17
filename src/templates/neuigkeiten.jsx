import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../layout/Layout'
import {
  Header,
  BackButton,
  Content,
} from '../components/NeuigkeitenPage/components'

import ContactComponent from '../components/Common/ContactComponent/ContactComponent'

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Header>
        <div className="wrapper">
          <BackButton to="/veranstaltungen">&#8592;</BackButton>
          <h1>{post.frontmatter.title}</h1>
        </div>
      </Header>
      <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      <ContactComponent />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
