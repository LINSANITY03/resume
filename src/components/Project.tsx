import style from "./Project.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import pro_professional from "../helper/pro_professional"
import SideProjectData from "../helper/SideProjectData"

type Props = {}

export default function Project({ }: Props) {
    return (
        <section className={style.main__container}>
            <div className={style.projects__container}>

                <div className={style.professional__container}>
                    <p className={style.title__name}>Professional Projects</p>

                    {pro_professional.map((item, index) => {
                        return (

                            <div className={style.each__module}>
                                <div className={style.left__line}>
                                </div>
                                <div className={style.project__container}>
                                    <h3 className={style.project__name}>{item.project_name}</h3>
                                    <div className={style.project__content}>
                                        <div className={style.project__image}>
                                            <img className={style.ns__img} src={item.img} alt='NewsSarathi' width='700' height='450' />
                                        </div>
                                        <div className={style.project__details}>

                                            <p className={style.description}>{item.description}
                                            </p>
                                            <ul className={style.skill__used}>
                                                {item.skills.map((skill, idx) => {
                                                    return (
                                                        <li>{skill}</li>
                                                    )
                                                })
                                                }
                                            </ul>
                                            {item.link ?
                                                <a className={style.external__link} href={item.link} target='_blank' rel="noreferrer">

                                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                                </a> : ""
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}

                </div>


                <div className={style.sideProject__container}>
                    <p className={style.sd_title}>Side Projects</p>

                    {SideProjectData.map((item, index) => {
                        return (

                            <div className={style.each__module}>
                                <div className={style.left__line}>
                                </div>
                                <div className={style.project__container}>
                                    <h3 className={style.project__name}>{item.project_name}</h3>
                                    <div className={style.project__content}>
                                        <div className={style.project__image}>
                                            <img className={style.ns__img} src={item.img} alt='NewsSarathi' width='700' height='450' />
                                        </div>
                                        <div className={style.project__details}>

                                            <p className={style.description}>{item.description}
                                            </p>
                                            <ul className={style.skill__used}>
                                                {item.skills.map((skill, idx) => {
                                                    return (
                                                        <li>{skill}</li>
                                                    )
                                                })
                                                }
                                            </ul>
                                            <div className={style.github__actions}>

                                                {item.link ?
                                                    item.link.map((links, idx) => {
                                                        return (
                                                            <a className={style.external__link} href={links} target='_blank' rel="noreferrer">
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

            </div>
        </section>
    )
}