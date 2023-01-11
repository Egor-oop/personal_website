import React from 'react'
import styles from './Project.module.scss'

export const Project = ({ imgUrl, title, url, description }) => {
    return (
        <a href={url} target='_blank' rel="noreferrer" className={styles['project__url']}>
            <div className={styles['project']}>
                <img src={imgUrl} alt="" className={styles['project__image']} />
                <span className='heading heading3'>{title}</span>
                <p>{description}</p>
            </div>
        </a>
    )
}
