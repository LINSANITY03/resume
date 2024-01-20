import { useEffect, useState } from "react";
import styles from "./Navbar.module.css"
import Link from "../utils/Link";
import { SelectedPage } from "../utils/types";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

function Navbar(Props: Props) {
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
                <Link page="Home" selectedPage={Props.selectedPage} setSelectedPage={Props.setSelectedPage} />
                <Link page="Experience" selectedPage={Props.selectedPage} setSelectedPage={Props.setSelectedPage} />
                <Link page="Project" selectedPage={Props.selectedPage} setSelectedPage={Props.setSelectedPage} />
                <Link page="Contact" selectedPage={Props.selectedPage} setSelectedPage={Props.setSelectedPage} />
            </ul>
        </nav>
    )
}

export default Navbar