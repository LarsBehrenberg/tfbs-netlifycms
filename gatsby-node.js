const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

/* Allows named imports */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

// Create ueber uns and leistungen pages
exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    const employeePageTemplate = path.resolve('src/templates/employee.jsx')
    const skillPageTemplate = path.resolve('src/templates/skill.jsx')
    const neuigkeitenPageTemplate = path.resolve(
      'src/templates/neuigkeiten.jsx',
    )

    resolve(
      graphql(
        `
          query {
            employees: allPrismicEmployee {
              nodes {
                data {
                  slug {
                    text
                  }
                }
              }
            }
            skills: allPrismicSkill {
              nodes {
                data {
                  slug {
                    text
                  }
                }
              }
            }
            neuigkeiten: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/neuigkeiten/" } }
            ) {
              nodes {
                id
                frontmatter {
                  templateKey
                  slug
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        // store different pages
        const employees = result.data.employees.nodes
        const skills = result.data.skills.nodes
        const neuigkeiten = result.data.neuigkeiten.nodes

        // create employee pages
        employees.forEach(({ data }) => {
          const slug = `ueber-uns/${data.slug.text}`
          createPage({
            path: slug,
            component: employeePageTemplate,
            context: {
              pathSlug: data.slug.text,
            },
          })
        })

        // create skill pages
        skills.forEach(({ data }) => {
          const slug = `leistungen/${data.slug.text}`
          createPage({
            path: slug,
            component: skillPageTemplate,
            context: {
              pathSlug: data.slug.text,
            },
          })
        })

        // create neuigkeiten pages
        neuigkeiten.forEach(node => {
          const id = node.id
          createPage({
            path: node.frontmatter.slug,
            component: neuigkeitenPageTemplate,
            context: {
              id,
            },
          })
        })
      }),
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  // if (internal.type === `MarkdownRemark`) {
  //   const value = createFilePath({ node, getNode });
  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value,
  //   });
  // }
}
