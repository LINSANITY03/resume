import React from 'react'
import style from "./Project.module.css"
import NewsSarathi from "../assets/news_sarathi/dashboard.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import pro_professional from "../helper/pro_professional"
import index from '../layouts'

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
                    })};

                    {/* <div className={style.each__module}>
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

                    <div className={style.each__module}>
                        <div className={style.left__line}>
                        </div>
                        <div className={style.project__container}>
                            <h3 className={style.project__name}>Shangrila Cashmere</h3>
                            <div className={style.project__content}>
                                <div className={style.project__image}>
                                    <img className={style.ns__img} src={NewsSarathi} alt='NewsSarathi' width='700' height='450' />
                                </div>
                                <div className={style.project__details}>

                                    <p className={style.description}>
                                        An In-House management system which handles orders and maintain materials stock.
                                    </p>
                                    <ul className={style.skill__used}>
                                        <li>Visual Studio</li>
                                        <li>Python</li>
                                        <li>Django</li>
                                        <li>Django-rest-Framework</li>
                                        <li>Flutter</li>
                                        <li>Face-recognition</li>
                                        <li>Redis</li>
                                        <li>Celery</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div> */}

                </div>
                <p className={style.sd_title}>Side Projects</p>
                <div className={style.sideProject__container}>

                    {/* Projects with line */}

                    {/* project name */}
                    <p >File Server Application</p>
                    {/* project pictures */}
                    {/* Information */}
                    {/* tech stack */}
                    {/* links or code */}

                </div>
            </div>
        </section>
    )
}