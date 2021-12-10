import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"
import "../sass/main.scss"
import "../sass/pages/gallery.scss"

const GalleryPage = () => {
  return (
    <div id="root">
      <Header name="gallery"/>
      <main>
        <div id="gallery">
          <StaticImage className="gallery-image" src="../images/cops-off-campus-banner.jpeg" alt="cops off campus banner" layout="constrained" />
          <StaticImage className="gallery-image" src="../images/cops-off-earth-cage.jpeg" alt="cops off earth cage" layout="constrained" />
          <StaticImage className="gallery-image" src="../images/rally-banner-projection.jpeg" alt="rally banner projection" layout="constrained" />
          <StaticImage className="gallery-image" src="../images/rally-crowd.jpeg" alt="rally crowd" layout="constrained" />
          <StaticImage className="gallery-image" src="../images/rally-what-would-you-do.jpeg" alt="rally what would you do" layout="constrained" />
          <StaticImage className="gallery-image" src="../images/what-would-you-do-banner.jpeg" alt="what would you do banner" layout="constrained" />
          <StaticImage className="gallery-image" src="../images/halloween-art-night.png" alt="halloween art night" layout="constrained" />
          <StaticImage className="gallery-image" src="../images/come-back.png" alt="come back" layout="constrained" />
          <StaticImage className="gallery-image" src="../images/zoom-bg.png" alt="zoom bg" layout="constrained" />
          <StaticImage className="gallery-image" src="../images/dish-defund.jpg" alt="dish defund" layout="constrained" />
          <StaticImage className="gallery-image" src="../images/200-mil-funding.jpg" alt="200 mil funding" layout="constrained" />
          <StaticImage className="gallery-image" src="../images/blm.jpg" alt="blm" layout="constrained" />
          <StaticImage className="gallery-image" src="../images/rally-art-projection.jpg" alt="rally art projection" layout="constrained" />
          <StaticImage className="gallery-image" src="../images/cops-off-campus-apartment.jpg" alt="cops off campus apartment" layout="constrained" />
          <StaticImage className="gallery-image" src="../images/rally-cops-off-campus.jpeg" alt="rally cops off campus" layout="constrained" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default GalleryPage
