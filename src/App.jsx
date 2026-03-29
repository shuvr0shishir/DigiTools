import './App.css'
import Banner from './components/Banner/Banner'
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
      </main>
    </>
  )
}

export default App
