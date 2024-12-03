import fsa from "../assets/fileserverapp/cli.png"
import Game from "../assets/algo_visu/game.jpg"
import Dashboard from "../assets/slp/dashboard.png"
import events from "../assets/sofhe/events.png"
import sentiment from "../assets/sentiment_analysis/code.png"
import confusion_matrix from "../assets/fraud_detection/confusion_matrix.png"

interface Project {
    project_name: string,
    img: string,
    description: string,
    skills: string[],
    link: null | string[]
}

const SideProjectData: Project[] = [
    {
        project_name: 'File Server Application',
        img: fsa,
        description: "A command-line interface written in Golang programming language for server-client file transfer protocol.",
        skills: [
            "Golang",
            "CLI",
            "Github Actions"
        ],
        link: ["https://github.com/LINSANITY03/FileServerApp"]
    },
    {
        project_name: 'Algorithm Visualizer',
        img: Game,
        description: `A game written in Python to show visualization of popular algorithms. Currently, A star algorithm is visualized to find shortest path in this game with more addition incoming.`,
        skills: [
            "Python",
            "Pygame",
            "Algorithm Design",
            "Shortest Path"
        ],
        link: ["https://github.com/LINSANITY03/Algorithm_Visualizer"]
    },
    {
        project_name: 'Software for Household Expenses',
        img: events,
        description: `SOFHE is a web application where user can track and monitor their expenses with future integration of recommendation system to users.`,
        skills: [
            "Python",
            "Django-rest-framework",
            "ReactJS",
            "Swagger API",
            "HTML/CSS/JS",
            "MYSQL"
        ],
        link: ["https://github.com/LINSANITY03/SOFHE_Backend",
            "https://github.com/LINSANITY03/SOFHE_Frontend"]
    },
    {
        project_name: 'Student Learning Platform (Major Project)',
        img: Dashboard,
        description: `Student Learning Platform digitalize the traditional education system by providing live classes, recorded video classes, question collection, AI based questionnaire system, notes and other studying material on a single platform.`,
        skills: [
            "Python",
            "Flask",
            "HTML/CSS/JS",
            "ML",
            "MYSQL"
        ],
        link: ["https://www.linkedin.com/in/pujan-thing-46ba4a1bb/details/projects/1353199704/multiple-media-viewer/?profileId=ACoAADM78hMBT7uXzsbt6oZQCkDAFI-nK3JF6TU&treasuryMediaId=1704307845659"]
    },
    {
        project_name: 'Real time Sentiment Analaysis',
        img: sentiment,
        description: `Analyse the user text input in real time and provide sentiment analysis.`,
        skills: [
            "FastAPI",
            "TensorFlow",
            "PyTest"
        ],
        link: ["https://github.com/LINSANITY03/Real-time-sentiment-analysis"]
    },
    {
        project_name: 'Fraud Detection in Financial Transactions Using Autoencoders',
        img: confusion_matrix,
        description: `Autoencoders are unsupervised neural networks used for anomaly detection. The idea behind using them for fraud detection is that they are trained to learn a compressed representation of the data (normal transactions). When a fraudulent transaction occurs, the reconstruction error of the autoencoder will be significantly higher, signaling that the transaction is anomalous.`,
        skills: [
            "PyTorch",
            "Jupyter Notebook",
            "Pandas",
            "Matplotlib",
            "Seaborn"
        ],
        link: ["https://github.com/LINSANITY03/Fraud_detection_using_Autoencoders"]
    },


]

export default SideProjectData.reverse()