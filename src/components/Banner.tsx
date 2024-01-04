import React from 'react'
import icon from "../logo.svg"
import styles from "./Banner.module.css"
type Props = {}

function Banner({ }: Props) {
    return (
        <section className={styles.banner_main}>
            <div className={styles.banner_container}>
                <div className={styles.box__container}>
                    <div className={styles.description}>

                        <p className={styles.description_text} style={{ fontSize: 30 }}>Hi,
                            <br />
                            <span style={{ fontSize: 55 }}>I'm Pujan Thing.</span>

                            <br />
                            <span style={{ fontSize: 65 }}>

                                I am a
                                <span style={{ fontWeight: 800 }}> Software Engineer.</span>
                            </span>
                        </p>
                    </div>
                    <div className={styles.download__modal}>
                        <h3>download resume in different formats</h3>
                        <div className={styles.download__options}>
                            <div className={styles.download__box}>
                                <img src={icon} width="30" height="30" alt="" />
                                <p>Pdf</p>
                            </div>

                            <div className={styles.download__box}>
                                <img src={icon} width="30" height="30" alt="" />
                                <p>Docx</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner