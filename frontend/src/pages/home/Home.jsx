import React from 'react'
import { Arrow } from '../../components/arrow/Arrow'
import { About } from '../../components/home/about/About'
import { MainSection } from '../../components/home/mainSection/MainSection'
import './Home.scss'

export const Home = () => {
  return (
    <>
      <MainSection />
      <Arrow hlink={'#about'} />
      <About />
    </>
  )
}
