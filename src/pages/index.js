import * as React from "react"
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"
import "../sass/main.scss"
import "../sass/pages/front-page.scss"

const IndexPage = () => {
  return (
    <div id="root">
      <Header name="abolish stanford"/>
      <main>
        <div className="container">
          <p>an autonomous formation fighting for <span>police abolition</span> and <span>total liberation</span> at stanford university and across the peninsula</p>
        </div>
        <div className="twitter-feed container">
          <a className="twitter-timeline" data-width="320px" data-theme="dark" href="https://twitter.com/abolishstanford?ref_src=twsrc%5Etfw">Tweets by abolishstanford</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
