import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <>
      <Navbar cartNumber={cartNumber} />
      <main className={styles.main}><Outlet context={{cartNumber, setCartNumber}}/></main>
      <Footer />
    </>
  )
}

export default App
