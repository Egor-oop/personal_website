import React, { useState } from 'react'
import { Links } from './Links'
import styles from './Toggle.module.scss'

export const Toggle = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={styles['toggle']}>
            <div onClick={() => setIsActive(!isActive)} className={styles['toggle__btn']}>
                <div />
                <div />
                <div />
            </div>
            <div
                onClick={() => setIsActive(!isActive)}
                className={`${styles['toggle__menu']} ${isActive ? styles['toggle__menu-active'] : styles['toggle__menu-inactive']}`} //${isActive ? 'active' : 'inactive'}
            >
                <div className={styles['toggle__links']}>
                    <Links />
                </div>
            </div>
        </div>
    )
}
