import React, { useState, useEffect } from 'react'
import styles from './Projects.module.scss'
import sectionStyles from '../../section.module.scss'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

import { Project } from './Project'

export const Projects = () => {
    const [projects, setProjects] = useState([])
    const projectsCollectionRef = collection(db, 'projects')

    useEffect(() => {
        const getProjects = async () => {
            const data = await getDocs(projectsCollectionRef)
            setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getProjects()
    })

    return (
        <section
            id='projectsSection'
            className={`container ${styles['projects-section']} ${sectionStyles['lg-section']}`}
        >
            <span className='heading heading2'>Проекты</span>
            <div className={styles['projects-section__projects']}>
                {projects.map(proj => (
                    <Project
                        title={proj.title}
                        description={proj.description}
                        url={proj.url}
                        key={proj.id}
                    />
                ))}
            </div>
        </section>
    )
}
