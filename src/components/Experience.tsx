import React from 'react'
import style from "./Experience.module.css"

type Props = {}

function Experience({ }: Props) {
    return (
        <section className={style.main__container}>
            <div className={style.working__container}>
                <p className={style.title__text}>Experience
                    {/* <span><div className={style.line__1} /></span> */}
                </p>
                <div className={style.highlight__container}>
                    {/* Photos of different programming language */}
                </div>
            </div>
        </section>
    )
}

export default Experience