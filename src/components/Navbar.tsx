import React from 'react'
import styles from "./Navbar.module.css"
import logo from "../logo.svg"
type Props = {}

function Navbar({ }: Props) {
    return (
        // main container
        <nav className={styles.main_navbar}>
            <img src={logo} width="50" height="50" alt="" />
            <ul className={styles.nav_components}>
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>My Journey</li>
            </ul>
            {/* options */}
        </nav>
    )
}

export default Navbar