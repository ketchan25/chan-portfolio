import { Navbar } from './layout/Navbar'
import { Hero } from './layout/Sections/Hero'
import { AboutMe } from './layout/Sections/AboutMe'
import { TechnicalSkills } from './layout/Sections/TechnicalSkills'
import { Career } from './layout/Sections/Career'
import { GetInTouch } from './layout/Sections/GetInTouch'

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <AboutMe/>
        <TechnicalSkills/>
        <Career/>
        <GetInTouch/>
      </main>
    </>
  )
}

export default App
