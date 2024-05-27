import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Get in touch!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <a href="mailto:ltoma001@ucr.edu" target="_blank">
                    <img src={getImageUrl("footer/email.png")} alt="Email icon" />
                </a>
                <a href="mailto:ltoma001@ucr.edu" target="_blank">
                    ltoma001@ucr.edu
                </a>
            </li>
            <li className={styles.link}>
                <a href="https://linkedin.com/in/lauren-tomasi" target="_blank">
                    <img src={getImageUrl("footer/linkedin.png")} alt="Linkedin icon" />
                </a>
                <a href="https://linkedin.com/in/lauren-tomasi" target="_blank">
                    linkedin.com/in/lauren-tomasi
                </a>
            </li>
            <li className={styles.link}>
                <a href="https://github.com/ltoma001" target="_blank">
                    <img src={getImageUrl("footer/github.png")} alt="Github icon" />
                </a>
                <a href="https://github.com/ltoma001" target="_blank">
                    github.com/ltoma001
                </a>
            </li>
        </ul>
    </footer>
  )
}
