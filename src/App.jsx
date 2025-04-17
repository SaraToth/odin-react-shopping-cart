import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Navbar cartNumber={0}/>
      <main className={styles.main}><Outlet /></main>
      <Footer />
    </>
  )
}

export default App
