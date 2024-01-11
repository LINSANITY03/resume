import { useEffect, useState } from "react";
import styles from "./Navbar.module.css"
type Props = {}

function Navbar({ }: Props) {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    handleShow(true);
                } else handleShow(false);
            });
        };
    }, []);

    return (
        // main container
        <nav className={`${styles.main_navbar} ${show && `${styles.navbar__change}`}`}>
            <ul className={styles.nav_components}>
                <li>Home</li>
                <li>Experience</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar