import { Navbar } from './layout/Navbar'
import { Hero } from './layout/Sections/Hero'
import { AboutMe } from './layout/Sections/AboutMe'
import { TechnicalSkills } from './layout/Sections/TechnicalSkills'
import { Career } from './layout/Sections/Career'

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <AboutMe/>
        <TechnicalSkills/>
        <Career/>
      </main>
    </>
  )
}

export default App
