import React from 'react'
import './Nav.scss'

export const Nav = ({ active }) => {
  return (
    <nav>
      <ul className='links code-text'>
        <li className={active === 'home' && 'active'}>&lt;Home &#47;&gt;</li>
        <li className={active === 'protfolio' && 'active'}>&lt;Portfolio &#47;&gt;</li>
      </ul>
    </nav>
  )
}
