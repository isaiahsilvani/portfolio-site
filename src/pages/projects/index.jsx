import React from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'
import * as styles from '../../styles/projects.module.css'

export default function Projects({ data }) {
  console.log(data)
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
query ProjectsPage {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        stack
        title
      }
      id
    }
  }
}
`