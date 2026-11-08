import style from "./Project.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare , faLongArrowDown, faLongArrowUp} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import pro_professional from "../helper/pro_professional"
import SideProjectData from "../helper/SideProjectData"
import { SelectedPage } from "../utils/types"
import { motion } from "framer-motion";
import { useState } from "react"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

export default function Project(props: Props) {

    const [showAll, setshowAll] = useState(false);
    const initialCount = 4;

    return (
        <section className={style.main__container} id="project">
            <motion.div
                onViewportEnter={() => props.setSelectedPage(SelectedPage.Project)}>
                <div className={style.projects__container} >

                    <div className={style.professional__container}>
                        <p className={style.title__name}>Professional Projects</p>

                        {pro_professional.map((item, index) => {
                            return (

                                <div className={style.each__module} key={index}>
                                    <div className={style.left__line}>
                                    </div>
                                    <div className={style.project__container}>
                                        <h3 className={style.project__name}>{item.project_name}</h3>
                                        <div className={style.project__content}>
                                            <div className={style.project__image}>
                                                <img className={style.ns__img} src={item.img} alt={item.project_name} width='700' height='450' loading="lazy"/>
                                            </div>
                                            <div className={style.project__details}>

                                                <p className={style.description}>{item.description}
                                                </p>
                                                <ul className={style.skill__used}>
                                                    {item.skills.map((skill, idx) => {
                                                        return (
                                                            <li key={idx}>{skill}</li>
                                                        )
                                                    })
                                                    }
                                                </ul>
                                                {item.link && (
                                                <div className={style.project__actions}>
                                                    <a
                                                        className={style.external__link}
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`Visit ${item.project_name}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faArrowUpRightFromSquare}
                                                        />
                                                    </a>
                                                </div>
                                            )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}

                    </div>


                    <div className={style.sideProject__container}>
                        <p className={style.sd_title}>Side Projects</p>

                        {(showAll ? SideProjectData : SideProjectData.slice(0, initialCount)).map((item, index) => {
                            return (

                                <div className={style.each__module} key={index}>
                                    <div className={style.left__line}>
                                    </div>
                                    <div className={style.project__container}>
                                        <h3 className={style.project__name}>{item.project_name}</h3>
                                        <div className={style.project__content}>
                                            <div className={style.project__image}>
                                                <img className={style.ns__img} src={item.img} alt='NewsSarathi' width='700' height='450' loading="lazy"/>
                                            </div>
                                            <div className={style.project__details}>

                                                <p className={style.description}>{item.description}
                                                </p>
                                                <ul className={style.skill__used}>
                                                    {item.skills.map((skill, idx) => {
                                                        return (
                                                            <li key={idx}>{skill}</li>
                                                        )
                                                    })
                                                    }
                                                </ul>
                                                <div className={style.github__actions}>

                                                    {item.link ?
                                                        item.link.map((links, idx) => {
                                                            return (
                                                                <a className={style.external__link} href={links} target='_blank' rel="noreferrer" key={idx}
                                                                aria-label={`View ${item.project_name} on GitHub`}>
                                                                    <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                                                                </a>

                                                            )
                                                        })
                                                        : ""
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}

                    </div>

                    {/* More Button */}
                    {SideProjectData.length > initialCount && (
                        <div className={style.logo_container} onClick={() => setshowAll(!showAll)}>
                        <button
                                type="button"
                                className={style.wrapper_container}
                                onClick={() => setshowAll(!showAll)}
                                aria-expanded={showAll}
                            >
                                <span>
                                    {showAll ? "Show less" : "Show more"}
                                </span>

                                <FontAwesomeIcon
                                    icon={showAll ? faLongArrowUp : faLongArrowDown}
                                />
                            </button>
                    </div>
                    )}
                    

                </div>

            </motion.div>
        </section>
    )
}