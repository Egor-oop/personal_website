import React from 'react'
import styles from './WorkCard.module.scss'

export const WorkCard = ({ title, role, description, url, startDate, endDate }) => {
    return (
        <a href={url} target='_blank' rel="noreferrer" className={styles['workcard__url']}>
            <div className={styles['workcard']}>
                <span className='heading heading3'>{title}</span>
                <span className={styles['workcard__role']}>{role}</span>
                <span className={styles['workcard__date']}>{startDate} - {endDate}</span>
                <p>{description}</p>
            </div>
        </a>
    )
}
