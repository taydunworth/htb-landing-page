/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AltLogo from "../images/HTB-Alt-Logo.svg";
import * as styles from "../components/index.module.css"

import Header from "./header"
import "./layout.css"
import "./mobile.css"

const navLinks = [
  { text: "Apply as a Maker", url: "https://zfrmz.com/TpIzhMG8JkhwvxYHED0T" },
  { text: "Apply as a Market", url: "https://zfrmz.com/uTsgL670SiJFdQfjP7mG" },
  { text: "Email Us", url: "mailto:hello@handmadetampabay.com" },
]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-info">
            <div className="newsletter">
              <h2>Let's stay in touch.</h2>
              <p>We’re still putting all of the pieces together, but we’d love for you to be one of the first to know when we launch the directory.</p>
              <p><strong>Sign up for emails, so you can be in the know.</strong></p>
              <a className="primary-btn" href="https://zfrmz.com/PvPI2Q0Y8IRlMDOmCHw5" target="_blank">Sign Up</a>
            </div>
            <div className="footer-nav">
              <img id="alt-logo" src={AltLogo} alt="Handmade Tampa Bay Logo" />
              <p className="subnav">
                {navLinks.map((link, i) => (
                  <React.Fragment key={link.url}>
                    <a href={link.url}>{link.text}</a>
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
          <p className={styles.textCenter}>© {new Date().getFullYear()} &middot; Handmade Tampa Bay in collaboration with
          {` `}
          <a href="https://www.thesunshinecreative.com">The Sunshine Creative</a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
