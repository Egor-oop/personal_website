import React from 'react'
import styles from './WorkExperience.module.scss'
import sectionStyles from '../../section.module.scss'
import { WorkCard } from './WorkCard'

export const WorkExperience = () => {
    const [workExperience, setWorkExperience] = React.useState([])


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
                        key={work.id}
                    />
                ))}
                <WorkCard
                    title={'asdfasdf'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull.'}
                    url={'https://github.com/Egor-oop'}
                    role={'Developer'}
                    startDate={'ajk 2000'}
                    endDate={'jo 2020'}
                />
            </div>
        </section>
    )
}
