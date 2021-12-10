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
          <p>an autonomous formation fighting for <span className="emphasis">police abolition</span> and <span className="emphasis">total liberation</span> at stanford university and across the peninsula</p>
        </div>
        <div className="our-report">
          <div className="container">
            <h1>our demands</h1>
            <p>We've seen the harm that SUDPS creates, both on- and off-campus, and <span className="emphasis">we know that we cannot be safe or free until policing is abolished everywhere.</span> We want cops off our campus. These are our demands:</p>
            <ol>
              <li>Defund the SUDPS by 80-100%</li>
              <li>End the Memorandum of Understanding</li>
              <li>End the Collective Bargaining Agreement</li>
              <li>Remove police from responses to mental health</li>
            </ol>
            <p>Read the full report on policing here:</p>
            <button><a href="https://drive.google.com/file/d/1HM5-8mnj4ZxOw_etGYFfbg5QIgP5nVeW/view" target="_blank" rel="noreferrer">Our Report</a></button>
          </div>
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
