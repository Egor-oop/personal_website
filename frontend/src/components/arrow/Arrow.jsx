import React from 'react'

import arrow from '../../assets/Arrow.svg'

export const Arrow = ({hlink}) => {
  return (
    <a href={hlink}>
      <img className='arrow' src={arrow} alt="down" />
    </a>
  )
}
