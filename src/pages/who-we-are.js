import * as React from "react"
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"
//import "../sass/main.scss"

const WhoWeArePage = () => {
  return (
    <div id="root">
      <Header name="who we are"/>
      <main>
        <div className="container">
          <p>abolish stanford is an autonomous formation fighting for <span>police abolition</span> and <span>total liberation</span> at stanford university and across the peninsula</p>
          <p>we are fighting to <span>divest</span> from institutions of policing, <span>repair</span> the harm that stanford has inflicted on local and campus communities, and <span>reinvest</span> in community safety and healing</p>
          <p>through direct action, county-level advocacy, political education, and growing our power, we are committed to abolishing policing and reinvesting resources towards community and institutions that actually keep us safe.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WhoWeArePage
