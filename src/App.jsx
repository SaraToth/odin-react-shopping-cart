import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar cartNumber={0}/>
      <div>This is the body of my app</div>
      <Footer />
    </>
  )
}

export default App
