import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Sections/Hero'
import { AboutMe } from './components/Sections/AboutMe'

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
