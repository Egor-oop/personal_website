import React from 'react'
import { Links } from './Links'
import styles from './Navigation.module.scss'

export const Navigation = () => {
    return (
        <>
            <nav className={styles['nav']}>
                <Links />
            </nav>
        </>
    )
}
