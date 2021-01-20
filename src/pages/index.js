import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.scss"
import Head from "../components/head"

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <h1>The Home Page</h1>

      <h2>
        <Link to="/about">About me</Link>
      </h2>
    </Layout>
  )
}
