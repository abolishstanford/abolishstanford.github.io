import * as React from "react"
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"
import "../sass/main.scss"

const ResourcesPage = () => {
  return (
    <div id="root">
      <Header name="resources"/>
      <main>
        <div className="container">
          <p>abolition essentials</p>
          <ul>
            <li><a href="https://copsoffcampuscoalition.com/abolition-101/">Abolition 101</a>, Cops Off Campus Coalition</li>
            <li><a href="https://www.nytimes.com/2020/06/12/opinion/sunday/floyd-abolish-defund-police.html">“Opinion: Yes, We Mean Literally Abolish the Police”</a>, Mariame Kaba</li>
          </ul>
          <p>stanford-specific</p>
          <ul>
            <li>“Coalition of Black Student Organizations Asks to University Administration on Campus Police”</li>
            <li><a href="https://stanforddaily.com/2020/06/29/on-black-stanford-police-black-lives-matter-and-abolition/">“Opinion: On Black Stanford, police, Black Lives Matter and abolition,”</a> Kory Gaines, The Stanford Daily</li>
            <li><a href="https://stanforddaily.com/2020/11/15/letter-to-stanfords-president-policing-on-campus/">“Letter to Stanford’s president: policing on campus,”</a> Committee for Change, Stanford Institutes of Medicine, The Stanford Daily</li>
            <li><a href="https://stanforddaily.com/2020/11/11/on-policing-at-stanford/">“On policing at Stanford,”</a> Abolish Stanford, The Stanford Daily</li>
            <li><a href="https://www.stanforddaily.com/2020/07/29/things-happen-at-stanford-that-we-dont-talk-about-one-students-experience-with-racial-profiling/">“‘Things happen at Stanford that we don’t talk about’: One student’s experience with racial profiling,”</a> Joelle Chien, The Stanford Daily</li>
            <li><a href="https://stanforddaily.com/2021/04/18/students-champion-investment-in-police-alternatives-for-campus-safety/">“Students champion investment in police alternatives for campus safety,”</a> Lorenzo Del Rosario, The Stanford Daily</li>
            <li><a href="https://www.stanforddaily.com/2021/03/29/the-dangerous-inadequacy-of-alertsu/">“The dangerous inadequacy of AlertSU”,</a> Mohammad Gumma, The Stanford Daily</li>
            <li><a href="https://stanforddaily.com/2020/12/13/punishment-or-public-safety-students-question-stanfords-new-33-5-million-public-safety-building/">“Punishment or public safety? Students question Stanford’s new $33.5 million Public Safety Building,”</a> Malaysia Atwater, The Stanford Daily</li>
            <li><a href="https://stanforddaily.com/2021/03/18/abolish-stanford-we-need-care-not-cops/">“Abolish Stanford: we need care not cops,”</a> Abolish Stanford, The Stanford Daily</li>
            <li><a href="https://stanforddaily.com/2021/02/18/police-response-to-mental-health-call-raises-questions-over-when-force-is-present/">“Police response to mental health call raises questions over when force is present,”</a> Ari Gabriel, The Stanford Daily</li>
            <li><a href="https://stanforddaily.com/2021/04/20/tell-stanford-end-the-collective-bargaining-agreement-with-the-deputy-sheriffs-association/">“Tell Stanford: End the collective bargaining agreement with the Deputy Sheriffs’ Association,”</a> Abolish Stanford, The Stanford Daily</li>
            <li><a href="https://www.stanforddaily.com/2021/04/25/opinion-police-on-santa-teresa/">“Opinion: Cops on Santa Teresa,”</a> Zora Ilunga-Reed, The Stanford Daily</li>
            <li><a href="https://www.stanforddaily.com/2021/05/02/op-ed-join-the-may-3-day-of-refusal/">“Op-Ed: Join the May 3rd Day of Refusal”,</a> Abolish Stanford, The Stanford Daily</li>
            <li><a href="https://www.stanforddaily.com/2021/05/19/abolish-stanford-rallies-to-defund-stanford-police/">“Abolish Stanford rallies to defund Stanford police,”</a> Jessica Zhu, The Stanford Daily</li>
            <li><a href="https://www.stanforddaily.com/2021/06/01/from-the-community-facing-the-facts-abolish-stanford-on-sudps/">“Facing the facts: Abolish Stanford on SUDPS,”</a> Abolish Stanford, The Stanford Daily</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ResourcesPage
