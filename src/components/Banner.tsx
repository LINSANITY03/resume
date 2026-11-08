import styles from "./Banner.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { SelectedPage } from "../utils/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Resume_file_name = "Pujan_Thing_Resume";

function Banner({ setSelectedPage }: Props) {
    const handlePDFDownloadClick = () => {
        const fileToDownload = `/utils/${Resume_file_name}.pdf`;

        const link = document.createElement('a');
        link.href = fileToDownload;
        link.download = `${Resume_file_name}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDOCXDownloadClick = () => {
        const fileToDownload = `/utils/${Resume_file_name}.docx`;

        // Create a hidden anchor element to trigger the download
        const link = document.createElement('a');
        link.href = fileToDownload;
        link.download = `${Resume_file_name}.docx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className={styles.banner_main} id="home">
            <div className={styles.banner_container}>
                <div className={styles.box__container}>
                    <div className={styles.description}>

                        <p className={styles.description_text} style={{ fontSize: 30 }}>Hi,
                            <br />
                            <span className={styles.name}>I'm Pujan Thing.</span>

                            <br />
                            <span className={styles.role}>
                                I am a{" "}
                                <span className={styles.role_highlight}> Software Engineer.</span>
                            </span>
                        </p>
                    </div>
                    <div className={styles.download__modal}>
                        <h2 className={styles.download__title}>Download Résumé</h2>
                        <p className={styles.download__description}> Want to know more about me? Feel free to get a copy of my up-to-date résumé.</p>
                        <div className={styles.download__options}>

                            <div className={`${styles.download__box} ${styles.pdf__cont} ${styles.pdf__color}`} onClick={handlePDFDownloadClick} aria-label="Download résumé as PDF">

                                <FontAwesomeIcon icon={faFilePdf} bounce className={styles.pdf_icon} />
                                <p>Pdf</p>
                            </div>

                            <div className={`${styles.download__box} ${styles.docx__cont} ${styles.docx__color}`} onClick={handleDOCXDownloadClick} aria-label="Download résumé as Word document">
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