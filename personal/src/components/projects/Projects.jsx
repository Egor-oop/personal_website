import React from 'react'
import styles from './Projects.module.scss'
import sectionStyles from '../../section.module.scss'

export const Projects = () => {
    return (
        <section className={`container ${styles['projects-section']} ${sectionStyles['dr-section']}`}>
            <span className='heading heading2 dr-th'>Проекты</span>
            <p>oshdj</p>
        </section>
    )
}
