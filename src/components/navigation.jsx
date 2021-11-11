import * as React from "react"
import "../index.scss"
import { StaticImage } from "gatsby-plugin-image"


const Navigation = () => {
  return (
    <nav id="navbar">
      <StaticImage src="../images/logo.png" alt="abolish stanford logo" />
      <ul>
        <li><a href="./">Home</a></li>
        <li><a href="./">Who We Are</a></li>
        <li><a href="./">Get Involved</a></li>
        <li><a href="./">Resources</a></li>
        <li><a href="./">Gallery</a></li>
        <li><a href="./">Ongoing Projects</a></li>
      </ul>
    </nav>
  )
}

export default Navigation
