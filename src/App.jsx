import './App.css'
import Banner from './components/Banner/Banner'
import DigitalToolsSection from './components/DigitalToolsSection/DigitalToolsSection'
import GetStartedSection from './components/GetStartedSection/GetStartedSection'
import Navbar from './components/Navbar/Navbar'
import StatsSection from './components/StatsSection/StatsSection'

function App() {

  return (
    <>
      <header className='shadow'>
        <Navbar />
      </header>
      <main>
        <Banner />
        <StatsSection />
        <DigitalToolsSection />
        <GetStartedSection />

      </main>
    </>
  )
}

export default App

//HoverEffect: hover:brightness-140 hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out 
// bg: bg-linear-to-r from-[#4F39F6] to-[#9514FA]