import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "../styles/header.module.scss"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"

const Header = () => {
  // Tagged template litteral
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
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </AppBar>
    </header>
  )
}
export default Header
