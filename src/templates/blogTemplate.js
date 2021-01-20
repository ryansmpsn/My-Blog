import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            fixed(width: 1600) {
              width
              height
              src
            }
          }
        }
      }
    }
  }
`

const BlogTemplate = props => {
  function returnImage(node) {
    return (
      <div>
        {props.data.contentfulBlogPost.body.references.map(
          resource =>
            resource.contentful_id === node.data.target.sys.id && (
              <img alt={resource.title} src={resource.fixed.src} />
            )
        )}
      </div>
    )
  }

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node)
        return returnImage(node)
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1> {props.data.contentfulBlogPost.title}</h1>
      <p> {props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        JSON.parse(props.data.contentfulBlogPost.body.raw),
        options
      )}
    </Layout>
  )
}

export default BlogTemplate
