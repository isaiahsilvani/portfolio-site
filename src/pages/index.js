import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Home({ data }) {
  console.log(data)
  console.log(data.file.childrenImageSharp[0].fluid)
  console.log(data.file.childImageSharp)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Dream Big</h2>
          <h2>Design & Develop</h2>
          <p>Full Stack Web Developer based in Philadelphia</p>
          <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
        </div>
        <Img fluid={data.file.childrenImageSharp[0].fluid}/>
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    relativePath
    childrenImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`