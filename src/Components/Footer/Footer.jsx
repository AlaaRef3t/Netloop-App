import React from 'react'
import Styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by <strong><a href="https://www.facebook.com/3laa.ref3t/">A-R</a></strong> Front-End Developer</p>
      </aside>
    </footer>
  )
}
