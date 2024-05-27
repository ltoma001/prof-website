import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils.js"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar} id="navbar">
        <a className={styles.title} href="/">Lauren Tomasi</a>
        <div className={styles.menu}>
            <img
                className={styles.menuBtn}
                src={
                    menuOpen
                    ? getImageUrl("nav/closeIcon.png")
                    : getImageUrl("nav/menuIcon.png")
                }
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#edu">Edu</a>
                </li>
                <li>
                    <a href="#exp">Exp</a>
                </li>
                <li>
                    <a href="#misc">Misc</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
