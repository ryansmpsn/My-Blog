const path = require("path")

// Generate pages from Contentful dynamically
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // 1. Get path to template
  const blogTemplate = path.resolve("./src/templates/blogTemplate.js")
  // 2. Get markdown data
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // 3. Create new pages
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
