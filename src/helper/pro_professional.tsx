import NewsSarathi from "../assets/news_sarathi/newssarathi.png"
import Cashmere from "../assets/cashmere/cashmere.jpg"

interface ProjectDetail {
    project_name: string,
    img: string,
    description: string,
    skills: string[],
    link: null | string
}

const pro_professional: ProjectDetail[] = [
    {
        project_name: 'NewsSarathi',
        img: NewsSarathi,
        description: "News Portal application build with Django and hosted on DigitalOcean with support for English and Nepali language. Admin can control News categories, ads, user management on the website.",
        skills: [
            "Visual Studio",
            "Python",
            "Django",
            "HTML/CSS/JS",
            "Digital Ocean"
        ],
        link: "https://newssarathi.com"
    },
    {
        project_name: 'Shangrila Cashmere',
        img: Cashmere,
        description: "An In-House web-app management system which handles orders and maintain materials stock.",
        skills: [
            "Visual Studio",
            "Python",
            "Django",
            "Django-rest-Framework",
            "Flutter",
            "Face-recognition",
            "Redis",
            "Celery"
        ],
        link: null
    }

]

export default pro_professional