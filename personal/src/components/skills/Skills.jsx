import React from 'react'
import styles from './Skills.module.scss'
import sectionStyles from '../../section.module.scss'

export const Skills = () => {
    return (
        <section
            id='skillsSection'
            className={`container ${styles['skillsSection']} ${sectionStyles['dr-section']}`}
        >
            <div>
                <span className='heading heading2 dr-th'>Языки и технологии</span>
                <span className='heading heading3 dr-th'>Backend</span>
                <ul>
                    <li>Python</li>
                    <li>Django</li>
                    <li>Django Rest Framework</li>
                    <li>SQL</li>
                </ul>
                <span className='heading heading3 dr-th'>Frontend</span>
                <ul>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>
                <br />
                <p>Git</p>
            </div>
        </section>
    )
}
