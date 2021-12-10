import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <p>Sign up for our mailing list!</p>
        <form>
          <input type="text" name="email" />
          <input type="submit" value="submit" />
        </form>
        <p>Connect with us on social media!</p>
        <div className="socials">
          <a href="https://twitter.com/abolishstanford" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com/abolishstanford" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="mailto:abolishstanford@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
