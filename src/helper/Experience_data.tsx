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
            `Developed and implemented a custom CRM system using Python and Django, boosting productivity through automating manual processes.`,
            `Built RESTful APIs with Django and MySQL to handle user authentication and data processing, integrating with JavaScript/Flutter on the frontend.`,
            `Automated data extraction from PDFs into MySQL databases, improving data collection efficiency.`,
            `Implemented responsive and user-friendly front-end interfaces using HTML, CSS and JavaScript
            frameworks.`,
            `Mentored interns on Python development best practices, ensuring quality and consistency in project deliverables.`
        ],
        skills: [
            "Python",
            "Django-rest-framework",
            "MYSQL",
            "POSTGRESQL",
            "Html/Css",
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