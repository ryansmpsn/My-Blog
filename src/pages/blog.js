import React from "react"
import Layout from "../components/layout"
import "../styles/index.scss"
import { graphql, Link, useStaticQuery } from "gatsby"

import blogStyles from "../styles/blog.module.scss"
import Head from "../components/head"

export default function Blog() {
  // Fetch data & slug for posts.

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do,  YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((content, index) => (
            <li key={index} className={blogStyles.post}>
              {/*    Use slug to generatelink to the post page */}
              <Link to={content.node.slug}>
                <h2>{content.node.title}</h2>
                <p>{content.node.publishedDate}</p>
              </Link>
            </li>
          ))}
        </ol>
      </h1>
    </Layout>
  )
}
