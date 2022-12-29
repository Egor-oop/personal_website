import React from 'react'
import styles from './Navigation.module.scss'
import { Toggle } from './Toggle'

export const Navigation = () => {
    return (
        <>
            <nav className={styles['nav']}>
                <a href='#mainSection'><div className={styles['nav__hlink']}>Обо мне</div></a>
                <a href='#skillsSection'><div className={styles['nav__hlink']}>Языки и технологии</div></a>
                {/* <a href='#projectsSection'><div className={styles['nav__hlink']}>Проекты</div></a> */}
            </nav>
            <Toggle />
        </>
    )
}
