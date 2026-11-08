import style from "./Experience.module.css"
import ExperienceData from "../helper/Experience_data"
import { SelectedPage } from "../utils/types";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

function Experience({ setSelectedPage }: Props) {
    return (
        <section className={style.main__container} id="experience">
            <div className={style.working__container}>
                <h2 className={style.title__text}>Experience</h2>

                {ExperienceData.map((each, index) => {
                    return (
                        <article className={style.experience__container} key={index}>
                            <h3 className={style.experience__title}>{each.title}
                                <span className={style.company__text}>{" "}@{each.company}.</span>
                            </h3>
                            <p className={style.work__duration}>{each.started_at} - {each.finished_at}</p>
                            <div className={style.exp__highlights}>
                                <ul>
                                    {each.highlights.map((point, idx) => {
                                        return (
                                            <li key={idx}>{point}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className={style.skills__highlight}>
                                <p className={style.skills__title}>Technologies used:</p>
                                <ul>
                                    {each.skills.map((skill, ix) => {
                                        return (
                                            <li key={ix}>{skill}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Experience