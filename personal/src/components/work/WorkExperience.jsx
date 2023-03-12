import React, { useState, useEffect } from 'react'
import styles from './WorkExperience.module.scss'
import sectionStyles from '../../section.module.scss'
import { WorkCard } from './WorkCard'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

export const WorkExperience = () => {
    const [workExperience, setWorkExperience] = useState([])
    const workExperienceRef = collection(db, 'works')

    useEffect(() => {
        const getWorkExperience = async () => {
            const data = await getDocs(workExperienceRef)
            setWorkExperience(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getWorkExperience()
        // eslint-disable-next-line
    }, [])

    return (
        <section
            id='workExperienceSection'
            className={`container ${styles['work-experience-section']} ${sectionStyles['lg-section']}`}
        >
            <span className='heading heading2'>Опыт работы</span>
            <div className={styles['work-experience-section__works']}>
                {workExperience.map(work => (
                    <WorkCard
                        title={work.title}
                        description={work.description}
                        url={work.url}
                        role={work.role}
                        startDate={work.start_date}
                        endDate={work.end_date}
                        key={work.id}
                    />
                ))}
            </div>
        </section>
    )
}
