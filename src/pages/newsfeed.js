import * as React from "react"
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"
import "../sass/main.scss"
import articles from "../data/article_results.js"

const NewsfeedPage = () => {
  var arr = [];
  for (let [key, value] of Object.entries(articles)) {
    arr.push(<h1 key={key}>{key}</h1>);
    for (let item of value) {
      arr.push(
        <div className="summary" key={item.headline}>
          <a href={item.url} target="_blank" rel="noreferrer">{item.headline}</a>
          <p>{item.summary}</p>
        </div>
      )
    }
  }

  return (
    <div id="root">
      <Header name="newsfeed"/>
      <main>
        <div className="container">
          {arr}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NewsfeedPage
