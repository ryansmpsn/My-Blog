import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "../styles/header.module.scss"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  List,
  Container,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  ListItemIcon,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
const Header = () => {
  const [drawerStatus, setDrawerStatus] = useState(false)
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
  let navLinks = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/blog" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ]
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <header className={headerStyles.header}>
      {isMobile ? (
        <>
          <AppBar color="transparent">
            <Toolbar className={headerStyles.navbarFlex}>
              <Typography variant="h6" className={headerStyles.title}>
                {data.site.siteMetadata.title}
              </Typography>
              <Button onClick={() => setDrawerStatus(true)} className="float">
                <ListItemIcon>
                  <MenuIcon />
                </ListItemIcon>
              </Button>
            </Toolbar>
          </AppBar>
          <SwipeableDrawer
            anchor={"right"}
            open={drawerStatus}
            onClose={() => setDrawerStatus(false)}
            onOpen={() => setDrawerStatus(true)}
          >
            some items
          </SwipeableDrawer>
        </>
      ) : (
        <AppBar
          position="static"
          color="transparent"
          className={headerStyles.navbarContainer}
        >
          <Toolbar className={headerStyles.navbarFlex}>
            <Typography variant="h6" className={headerStyles.title}>
              {data.site.siteMetadata.title}
            </Typography>
            <List component="nav" aria-labelledby="main navigation">
              {navLinks.map(({ title, path }, index) => (
                <Link
                  key={index}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to={path}
                >
                  {title}
                </Link>
              ))}
            </List>
          </Toolbar>
        </AppBar>
      )}
    </header>
  )
}
export default Header
