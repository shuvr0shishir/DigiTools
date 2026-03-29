import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <header className='shadow'>
        <Navbar />
      </header>
      <main>
        <Banner />
      </main>
    </>
  )
}

export default App
