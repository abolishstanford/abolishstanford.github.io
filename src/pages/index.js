import * as React from "react"
import Navigation from "../components/navigation.jsx"
import Header from "../components/header.jsx"
import "../index.scss"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Navigation />
      <Header />
      <div>
        <p>an autonomous formation fighting for <span>police abolition</span> and <span>total liberation</span> at stanford university and across the peninsula</p>
      </div>
      <div>
        <a className="twitter-timeline" data-width="335" data-theme="dark" href="https://twitter.com/abolishstanford?ref_src=twsrc%5Etfw">Tweets by abolishstanford</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
    </main>
  )
}




export default IndexPage
