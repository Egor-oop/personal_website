import React from 'react'
import styles from './Main.module.scss'
import sectionStyles from '../../section.module.scss'

import avatar from '../../img/m3.jpg'

export const Main = () => {
    return (
        <section
            id='mainSection'
            className={`container ${styles['main-section']} ${sectionStyles['lg-section']}`}
        >
            <div className=''>
                <img src={avatar} alt="Фото" className={styles['avatar']} />
            </div>
            <div className={styles['main-section__text']}>
                <span className='heading heading2'>
                    Привет! Я Егор Гулидо
                </span>
                <p>Я программист из России. 🇷🇺 <br /> Я разрабатываю API для различных задач при помощи Django Rest framework и иногда FastAPI. Также я разрабатываю frontend на JavaScript с React для своих проектов. 🚀
                </p>
            </div>
        </section>
    )
}
