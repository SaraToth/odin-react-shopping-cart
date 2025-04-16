import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar cartNumber={0}/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
