import './App.css'
import Banner from './components/Banner/Banner'
import DigitalToolsSection from './components/DigitalToolsSection/DigitalToolsSection'
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
      </main>
    </>
  )
}

export default App

//HoverEffect: hover:brightness-140 hover:scale-105 transition-all duration-300 ease-in-out 