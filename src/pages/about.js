import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import "../styles/index.scss"

export default function About() {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Page</h1>

      <h2>About content will render here. </h2>
    </Layout>
  )
}
