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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus numquam labore eum fuga laboriosam in rerum ab saepe tempora eligendi nobis maiores itaque illum blanditiis, incidunt aperiam, debitis ipsam dolore, voluptates vel! Delectus iusto maxime tempore laudantium id! Recusandae sit quos neque sed a dolores illum, repellat distinctio quo dolorum!</p>
            </div>
        </section>
    )
}
