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
