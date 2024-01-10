import React from 'react'
import style from "./Project.module.css"
import NewsSarathi from "../assets/news_sarathi/dashboard.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

type Props = {}

export default function Project({ }: Props) {
    return (
        <section className={style.main__container}>
            <div className={style.professional__container}>
                <p className={style.title__name}>Professional Projects</p>
                {/* professional projects with line */}

                <div className={style.each__module}>
                    <div className={style.left__line}>
                    </div>
                    <div className={style.project__container}>
                        <h3 className={style.project__name}>NewsSarathi</h3>
                        <div className={style.project__content}>
                            <div className={style.project__image}>
                                <img className={style.ns__img} src={NewsSarathi} alt='NewsSarathi' width='700' height='450' />
                            </div>
                            <div className={style.project__details}>

                                <p className={style.description}>News Portal application build with Django and hosted on DigitalOcean with support for English and Nepali language.
                                    Admin can control News categories, ads, user management on the website.
                                </p>
                                <ul className={style.skill__used}>
                                    <li>Visual Studio</li>
                                    <li>Python</li>
                                    <li>Django</li>
                                    <li>HTML/CSS/JS</li>
                                    <li>Digital Ocean</li>
                                </ul>
                                <a className={style.external__link} href="https://newssarathi.com" target='_blank'>

                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="sideProject__container">

                {/* Projects with line */}

                {/* project name */}
                {/* project pictures */}
                {/* Information */}
                {/* tech stack */}
                {/* links or code */}

            </div>
        </section>
    )
}