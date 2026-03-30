import './App.css'
import Banner from './components/Banner/Banner'
import DigitalToolsSection from './components/DigitalToolsSection/DigitalToolsSection'
import FooterSection from './components/FooterSection/FooterSection'
import GetStartedSection from './components/GetStartedSection/GetStartedSection'
import Navbar from './components/Navbar/Navbar'
import PricingSection from './components/PricingSection/PricingSection'
import StatsSection from './components/StatsSection/StatsSection'
import TransformSection from './components/TransformSection/TransformSection'

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
        <PricingSection />
        <TransformSection />
      </main>
      <footer className='bg-[#101727]'>
        <FooterSection />
      </footer>
    </>
  )
}

export default App

//HoverEffect: hover:brightness-140 hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out 
// bg: bg-linear-to-r from-[#4F39F6] to-[#9514FA]