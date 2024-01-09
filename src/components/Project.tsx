import React from 'react'
import style from "./Project.module.css"
import NewsSarathi from "../assets/news_sarathi/dashboard.png"

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
                        {/* project name */}
                        <img src={NewsSarathi} alt='NewsSarathi' width='700' height='450' />
                        {/* project pictures */}
                        <p className={style.description}>News Portal application build with Django and hosted on DigitalOcean with support for English and Nepali language.
                            Admin can control News categories, ads, user management on the website.
                        </p>
                        {/* Information */}
                        <ul className={style.skill__used}>
                            <li>Python</li>
                            <li>Django</li>
                            <li>HTML/CSS/JS</li>
                            <li>Digital Ocean</li>
                            <li>Visual Studio</li>
                        </ul>
                        {/* tech stack */}
                        <p>www.newssarathi.com</p>
                        {/* links or code */}
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