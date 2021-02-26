import React from "react"
import Footer from "./footer"
import Header from "./header"
import layoutStyles from "../styles/layout.module.scss"
import { StylesProvider } from "@material-ui/core/styles"

const Layout = props => {
  return (
    <StylesProvider injectFirst>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </StylesProvider>
  )
}

export default Layout
