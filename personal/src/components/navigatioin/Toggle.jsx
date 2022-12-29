import React from 'react'
import styles from './Toggle.module.scss'

export const Toggle = () => {
    return (
        <div className={styles['toggle']}>
            <div className={styles['toggle__btn']}>
                <div />
                <div />
                <div />
            </div>
        </div>
    )
}
