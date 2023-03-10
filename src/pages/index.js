import * as React from "react"
import Logo from "../images/HTB-Logo.png";

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const applyBtns = [
  { text: "Apply as a Maker", url: "https://zfrmz.com/TpIzhMG8JkhwvxYHED0T" },
  { text: "Apply as a Market", url: "https://zfrmz.com/uTsgL670SiJFdQfjP7mG" },
]

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <div className={styles.textCenter} id="hero-width">
        <img id="logo" src={Logo} alt="Handmade Tampa Bay Logo" />
        <h2>A guide for the handmade industry in Tampa Bay</h2>
        <p className="btns">
          {applyBtns.map((link, i) => (
            <React.Fragment key={link.url}>
              <a className="primary-btn" href={link.url}>{link.text}</a>
            </React.Fragment>
          ))}
        </p>
        <p className="subtitle">Don’t worry – It’s free!</p>
      </div>
    </div>

    <div className={styles.textCenter}>
      <h2>This is a big deal for small businesses.</h2>
      <p><strong>We’re still in the works,</strong> but our goal is to weave together our community of handmade businesses and markets in Tampa Bay into one collective directory to publicize the makers and the markets to one another, local brick-and-mortar businesses, and the Tampa Bay community.</p>
      <h4>In simpler terms, we’re building a one-stop-shop directory of makers and markets.</h4>
    </div>

    <div className={styles.textCenter}>
      <h2>It's all about handmade.</h2>
      <p>Our definition of "handmade" requires that either you, as the business owner, or another member of your business makes and/or designs your items. The use of a production partner is accepted as long as the designs being used are a creation of your business. Ex. you design graphics that are screen printed onto apparel by a third-party.</p>
    </div>

    <div className={styles.textCenter}>
      <h2>Tampa Bay is where it's at.</h2>
      <p>Your business or market must be located within the Tampa Bay area to be eligible for our directory. Our definition of the "Tampa Bay area" includes the following counties:</p>
      <ul>
        <li>Citrus</li>
        <li>Hernando</li>
        <li>Hillsborough</li>
        <li>Manatee</li>
      </ul>
      <ul>
      < li>Pasco</li>
        <li>Pinellas</li>
        <li>Polk</li>
        <li>Sarasota</li>
      </ul>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Handmade Tampa Bay" />

export default IndexPage
