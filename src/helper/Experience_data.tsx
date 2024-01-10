interface experience_data {
    title: string,
    company: string,
    started_at: string,
    finished_at: string | null,
    highlights: string[],
    skills: string[]
}

const Experience: experience_data[] = [
    {
        title: "Software Engineer",
        company: "Cyber Inquest Pvt Ltd",
        started_at: "Jan 2021",
        finished_at: "Oct 2022",
        highlights: [
            `Designed and built the backend architecture of an internal software system for a B2B company,
            automating order management and monitoring of store stocks. This increased production
            speed by 22%.`,
            `Developed 100% RESTful API using Django and MySQL for controlling user functions, integrating
            with JavaScript/Flutter on the frontend.`,
            `Create new text mining tools to improve data collection efficiency.`,
            `Implemented responsive and user-friendly front-end interfaces using HTML, CSS and JavaScript
            frameworks.`,
            `Mentored and provided guidance to 3 junior backend developers on Django and documented
            best practices within the organization.`
        ],
        skills: [
            "Python",
            "Django",
            "Django-rest-framework",
            "Flutter",
            "Non/Relational database",
            "Html/Css/Js",
            "ReactJs",
            "HtmlX",
            "Redis",
            "Celery",
            "Github",
            "Jira",
            "Docker",
            "Digital Ocean"
        ]
    }

]

export default Experience