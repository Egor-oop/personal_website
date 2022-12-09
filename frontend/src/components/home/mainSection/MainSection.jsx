import React from 'react'
import { Nav } from '../../navigation/Nav'
import { ScreenText } from '../../text/ScreenText'

import githubLogo from '../../../assets/github.svg'

export const MainSection = () => {
  return (
    <section style={{ 'padding': 0 }}>
      <div style={{ 'padding-bottom': '60px' }}>
        <ScreenText />
        <a style={{ 'paddingTop': '4px' }} target='blank' href="https://github.com/Egor-oop">
          <img src={githubLogo} alt="GitHub" />
        </a>
      </div>
      <Nav active='home' />
    </section>
  )
}
