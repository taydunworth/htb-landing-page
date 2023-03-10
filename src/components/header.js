import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
    }}
  >
    {/* <Link to="/">
      <StaticImage
        src="../images/HTB-Icon-1.png"
        loading="eager"
        width={200}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="Handmade Tampa Bay Icon of a Palm Tree in a Circle"
      />
    </Link> */}
  </header>
)

export default Header
