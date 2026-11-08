import style from "./Contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { SelectedPage } from '../utils/types'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

function Contact({ setSelectedPage }: Props) {
    return (
        <section className={style.contact__container} id="contact">
            <div className={style.contact__content}>
                <h2 className={style.contact__title}>
                    Get in touch?
                </h2>
                <p className={style.short__description}>Connect with me on Github, LinkedIn, or feel free to reach out directly.</p>
                <div className={style.icons__list}>
                    <a 
                        href="https://www.linkedin.com/in/pujan-thing-46ba4a1bb/" 
                        target='_blank' rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                    </a>
                    <a 
                        href="https://github.com/LINSANITY03" 
                        target='_blank' 
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile"
                    >
                        <FontAwesomeIcon icon={faGithub} size='2x' />
                    </a>
                    <a 
                        href="mailto:pujantamang92@gmail.com" 
                        aria-label="Send me an email"
                    >
                        <FontAwesomeIcon icon={faEnvelope} size='2x' />
                    </a>     
                </div>

                <p className={style.footer__text}>
                    © {new Date().getFullYear()} Pujan Thing. All rights reserved.
                </p>
            </div>
        </section>
    )
}

export default Contact