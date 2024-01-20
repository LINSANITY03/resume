import styles from "./Banner.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { SelectedPage } from "../utils/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

function Banner({ }: Props) {
    return (
        <section className={styles.banner_main} id="home">
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
                        <p style={{ fontWeight: 800, fontSize: 30 }}>Download Résumé</p>
                        <p style={{ marginTop: 5 }}> Want to know more about me? Feel free to get a copy of my up-to-date résumé.</p>
                        <div className={styles.download__options}>
                            <div className={`${styles.download__box} ${styles.pdf__cont} ${styles.pdf__color}`}>
                                <FontAwesomeIcon icon={faFilePdf} bounce className={styles.pdf_icon} />
                                <p>Pdf</p>
                            </div>

                            <div className={`${styles.download__box} ${styles.docx__cont} ${styles.docx__color}`}>
                                <FontAwesomeIcon icon={faFile} className={styles.docx_icon} />
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