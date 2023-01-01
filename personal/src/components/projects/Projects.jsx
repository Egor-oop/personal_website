import React from 'react'
import styles from './Projects.module.scss'
import sectionStyles from '../../section.module.scss'
import { Project } from './Project'

export const Projects = () => {
    const projects = [
        {
            imgUrl: 'https://picsum.photos/1920/1080',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti earum dolorem eveniet? Distinctio nam hic provident praesentium obcaecati ullam necessitatibus beatae adipisci fugit, ad perspiciatis molestias consequatur rerum nulla.',
            url: 'https://www.google.com/'
        },
        {
            imgUrl: 'https://picsum.photos/1920/1081',
            title: 'Aut alias a maiores ducimus rem deleniti nihil consectetur',
            description: 'Voluptates dolore alias impedit totam sequi excepturi, nisi soluta. Atque, error quod. Recusandae doloremque eveniet velit dolor vero ex asperiores vel magnam, pariatur sed tenetur saepe officia quas similique distinctio minima?',
            url: 'https://www.google.com/'
        },
    ]

    return (
        <section
            id='projectsSection'
            className={`container ${styles['projects-section']} ${sectionStyles['lg-section']}`}
        >
            <span className='heading heading2'>Проекты</span>
            <div className={styles['projects-section__projects']}>
                {projects.map(proj => (
                    <Project
                        imgUrl={proj.imgUrl}
                        title={proj.title}
                        description={proj.description}
                        url={proj.url}
                    />
                ))}
                {/* <Project
                    imgUrl={'https://picsum.photos/1920/1080'}
                    title={'Lorem ipsum dolor sit amet consectetur adipisicing elit'}
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti earum dolorem eveniet? Distinctio nam hic provident praesentium obcaecati ullam necessitatibus beatae adipisci fugit, ad perspiciatis molestias consequatur rerum nulla.'}
                    url={'https://www.google.com/'}
                />
                <Project
                    imgUrl={'https://picsum.photos/1920/1081'}
                    title={'Lorem ipsum dolor sit amet consectetur adipisicing elit'}
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti earum dolorem eveniet? Distinctio nam hic provident praesentium obcaecati ullam necessitatibus beatae adipisci fugit, ad perspiciatis molestias consequatur rerum nulla.'}
                    url={'https://www.google.com/'}
                /> */}
            </div>
        </section>
    )
}
