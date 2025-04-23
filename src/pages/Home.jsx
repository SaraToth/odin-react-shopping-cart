import { Link } from "react-router-dom";
import styles from "./Home.module.css";

/**
 * Home Page Component - Renders home page content
 * 
 * @returns {JSX.Element} 
 */

const Home = () => {
    return (
        <section className={styles.section}>
            <h1><b><i>Daywish Stationary</i></b></h1>
            <Link className={styles.linkButton} to="/shop">Shop Now</Link>
        </section>
    )
};

export default Home;