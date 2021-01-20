import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "../styles/footer.module.scss"
const date = new Date()

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <p>
        Created by {data.site.siteMetadata.author}, © {date.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
