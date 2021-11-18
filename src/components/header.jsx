import * as React from "react"
import "../index.scss"

const Header = (props) => {
  return (
    <div id="header">
      <h1 className="page-title">{props.name}</h1>
    </div>
  )
}

export default Header
