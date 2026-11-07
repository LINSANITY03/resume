interface experience_data {
  title: string;
  company: string;
  started_at: string;
  finished_at: string | null;
  highlights: string[];
  skills: string[];
}

const Experience: experience_data[] = [

  {
    title: "Founding Software Enigneer",
    company: "MyagentsAI",
    started_at: "Oct 2025",
    finished_at: "Mar 2026",
    highlights: [
      `Owned end-to-end delivery of the platform's secure credential and provider login/signup system (NextAuth.js) as sole engineer, from design through production launch.`,
      `Migrated the platform's AI agent infrastructure from OpenAI to Azure OpenAI, re-architecting the integration layer end-to-end.`,
      `Rebuilt middleware.ts to standardize error-handling and redirect logic across the application's request pipeline.`,
      `Shipped backend improvements to the FastAPI/Azure PostgreSQL stack every sprint since joining, as a core contributor to the platform team.`,
      `Replaced manual release steps with a fully automated CI/CD pipeline (GitHub Actions, Docker, Azure ACR/App Service) for Next.js and FastAPI deployments.`
    ],
    skills: [
        "Fastapi",
        "POSTGRESQL",
        "Redis",
        "Docker",
        "Github Action",
        "Next.JS",
        "Faiss",
        "Azure"
    ]
  },
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
      `Mentored interns on Python development best practices, ensuring quality and consistency in project deliverables.`,
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
      "Digital Ocean",
    ],
  },
];

export default Experience;
