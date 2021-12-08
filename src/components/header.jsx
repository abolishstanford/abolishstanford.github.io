import * as React from "react"
import Navigation from "./navigation.jsx"

const Header = (props) => {
  return (
    <header className="header">
      <title>Home Page</title>
      <Navigation />
      <h1 className="page-title">{props.name}</h1>
    </header>
  )
}

export default Header
