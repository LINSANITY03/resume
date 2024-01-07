import React from 'react'
import style from "./Project.module.css"

type Props = {}

export default function Project({ }: Props) {
    return (
        <section>
            <div className="professional__container">
                <p>Experience</p>
                {/* professional projects with line */}

                <div className="each__module">
                    <h3>NewsSarathi</h3>
                    {/* project name */}
                    <p>enter images or slider</p>
                    {/* project pictures */}
                    <p>News Portal application build with Django and hosted on DigitalOcean with support for English and Nepali language.
                        Admin can control News categories, ads, user management on the website.
                    </p>
                    {/* Information */}
                    <ul>
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