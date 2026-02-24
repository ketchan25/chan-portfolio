import { useState } from 'react'
import { Navbar } from './layout/Navbar'
import { Hero } from './layout/Sections/Hero'
import { AboutMe } from './layout/Sections/AboutMe'

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <AboutMe/>
      </main>
    </>
  )
}

export default App
