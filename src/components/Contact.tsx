import React from 'react'

import style from "./Contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

type Props = {}

function Contact({ }: Props) {
    return (
        <section className={style.contact__container}>
            {/* get in touch */}
            <p className={style.contact__title}>Get in touch?</p>
            {/* inspiring notes */}
            <p className={style.short__description}>Connect with me on Github, linkedin and feel free to reach out.</p>
            {/* linkedin */}
            {/* gmail */}
            {/* github */}
            <div className={style.icons__list}>
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
                <FontAwesomeIcon icon={faGithub} size='2x' />
                <FontAwesomeIcon icon={faEnvelope} size='2x' />
            </div>
        </section>
    )
}

export default Contact