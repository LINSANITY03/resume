import { useEffect, useState } from "react";
import styles from "./Navbar.module.css"
import Link from "../utils/Link";
import { SelectedPage } from "../utils/types";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

function Navbar(Props: Props) {
    const [show, setShow] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        
        // set initial state
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close mobile menu when Escape is pressed.
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        // main container
        <nav className={`${styles.main_navbar} ${(show || menuOpen) && `${styles.navbar__change}`}`} aria-label="Main navigation">
            {/* Mobile hamburger button */}
            <button type="button"
                className={`${styles.menu_toggle} ${
                    menuOpen ? styles.menu_toggle_open : ""
                }`}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="primary-navigation"
            >
                <span />
                <span />
                <span />
            </button>
            <ul id="primary-navigation" className={`${styles.nav_components} ${menuOpen ? styles.nav_components_open : ""}`} onClick={closeMenu}>
                <Link page="Home" selectedPage={Props.selectedPage} setSelectedPage={Props.setSelectedPage} />
                <Link page="Experience" selectedPage={Props.selectedPage} setSelectedPage={Props.setSelectedPage} />
                <Link page="Project" selectedPage={Props.selectedPage} setSelectedPage={Props.setSelectedPage} />
                <Link page="Contact" selectedPage={Props.selectedPage} setSelectedPage={Props.setSelectedPage} />
            </ul>
        </nav>
    )
}

export default Navbar