import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar cartNumber={0}/>
      <main><Outlet /></main>
      <Footer />
    </>
  )
}

export default App
