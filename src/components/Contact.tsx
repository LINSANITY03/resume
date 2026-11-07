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
            <p className={style.contact__title}>Get in touch?</p>
            <p className={style.short__description}>Connect with me on Github, linkedin and feel free to reach out.</p>
            <div className={style.icons__list}>
                <a style={{ color: 'white' }} href="https://www.linkedin.com/in/pujan-thing-46ba4a1bb/" target='_blank' rel="noreferrer">

                    <FontAwesomeIcon icon={faLinkedin} size='2x' />
                </a>
                <a style={{ color: 'white' }} href="https://github.com/LINSANITY03" target='_blank' rel="noreferrer">

                    <FontAwesomeIcon icon={faGithub} size='2x' />
                </a>
                <a style={{ color: 'white' }} href="mailto:pujantamang92@gmail.com" target='_blank' rel="noreferrer">

                    <FontAwesomeIcon icon={faEnvelope} size='2x' />
                </a>
            </div>
        </section>
    )
}

export default Contact