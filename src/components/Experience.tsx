import React from 'react'
import style from "./Experience.module.css"

type Props = {}

function Experience({ }: Props) {
    return (
        <section className={style.main__container}>
            <div className={style.working__container}>
                <p className={style.title__text}>Experience</p>
                <div className={style.experience__container}>
                    <h3 style={{ fontSize: 25, lineHeight: 0.1, color: 'white' }}>Software Engineer
                        <span className={style.company__text}> @Cyber Inquest Pvt Ltd.</span>
                    </h3>
                    <p className={style.work__duration}>Jan 2021 - Oct 2022</p>
                    <div className={style.exp__highlights}>
                        {/* highlights in points */}
                        <ul>
                            <li>Designed and built the backend architecture of an internal software system for a B2B company,
                                automating order management and monitoring of store stocks. This increased production
                                speed by 22%.
                            </li>
                            <li>Developed 100% RESTful API using Django and MySQL for controlling user functions, integrating
                                with JavaScript/Flutter on the frontend.
                            </li>
                            <li>
                                Create new text mining tools to improve data collection efficiency.
                            </li>
                            <li>
                                Implemented responsive and user-friendly front-end interfaces using HTML, CSS and JavaScript
                                frameworks.
                            </li>
                            <li>
                                Mentored and provided guidance to 3 junior backend developers on Django and documented
                                best practices within the organization.
                            </li>
                        </ul>
                    </div>
                    <div className={style.skills__highlight}>
                        <p style={{ fontWeight: 600, fontSize: 20 }}>Technologies used:</p>
                        <ul>
                            <li>Python</li>
                            <li>Django</li>
                            <li>Django-rest-framework</li>
                            <li>Flutter</li>
                            <li>Non/Relational database</li>
                            <li>Html/Css/Js</li>
                            <li>ReactJs</li>
                            <li>HtmlX</li>
                            <li>Redis</li>
                            <li>Celery</li>
                            <li>Github</li>
                            <li>Jira</li>
                            <li>Docker</li>
                            <li>Digital Ocean</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience