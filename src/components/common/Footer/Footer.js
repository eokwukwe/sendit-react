import React from "react"
import "./Footer.scss"

const Footer = () => (
  <footer className="footer" fixed="bottom">
    Copyright&copy; {new Date().getFullYear()}
  </footer>
)

export default Footer
