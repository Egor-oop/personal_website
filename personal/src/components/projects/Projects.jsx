import React from 'react'
import styles from './Projects.module.scss'
import sectionStyles from '../../section.module.scss'

export const Projects = () => {
    return (
        <section
            id='projectsSection'
            className={`container ${styles['projects-section']} ${sectionStyles['lg-section']}`}
        >
            <span className='heading heading2'>Проекты</span>
            <p>oshdj</p>
        </section>
    )
}
