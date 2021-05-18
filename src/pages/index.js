import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Dream Big</h2>
          <h2>Design & Develop</h2>
          <p>Full Stack Web Developer based in Philadelphia</p>
          <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%'}}/>
      </section>
    </Layout>
  )
}
