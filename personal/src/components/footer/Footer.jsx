import React from 'react'
import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={`${styles['footer']}`}>
            <div className='container'>
                <p>
                    Свяжитесь со мной:
                    <ul>
                        <li>egorgulido@mail.ru</li>
                        <li><a href="https://t.me/egorgulido">Telegram</a></li>
                        <li><a href="https://github.com/Egor-oop">GitHub</a></li>
                    </ul>
                </p>
                <span className='heading heading3'>2023 &#169; Егор Гулидо</span>
            </div>
        </footer>
    )
}
