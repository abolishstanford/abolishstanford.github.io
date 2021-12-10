import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {toggled: false};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      toggled: !prevState.toggled
    }));
  }

  render() {
    return (
      <button id="menu" className={this.state.toggled && 'menu-toggled'} aria-controls="primary-menu" aria-expanded="false" onClick={this.handleClick}>
				<svg width="20" height="11" viewBox="0 0 20 11" xmlns="http://www.w3.org/2000/svg">
					<line className="menu-bar-top" y1="10.5" x2="20" y2="10.5"/>
					<line className="menu-bar-middle" y1="5.5" x2="20" y2="5.5"/>
					<line className="menu-bar-bottom" y1="0.5" x2="20" y2="0.5"/>
				</svg>
			</button>
    );
  }
}

const Navigation = () => {
  return (
    <nav id="navbar">
      <a href="./"><StaticImage className="logo" src="../images/logo.png" alt="abolish stanford logo" layout="fixed" width={60} height={60} /></a>
      <Menu />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/who-we-are">Who We Are</a></li>
        <li><a href="https://drive.google.com/file/d/1HM5-8mnj4ZxOw_etGYFfbg5QIgP5nVeW/view" target="_blank" rel="noreferrer">Our Report</a></li>
        <li><a href="/resources">Resources</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/newsfeed">Newsfeed</a></li>
      </ul>
    </nav>
  )
}

export default Navigation
