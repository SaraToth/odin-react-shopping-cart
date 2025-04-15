import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar cartNumber={0}/>
      <Home />
      <Footer />
    </>
  )
}

export default App
