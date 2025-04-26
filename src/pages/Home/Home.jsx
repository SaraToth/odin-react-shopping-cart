import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import bgdImage from "../../assets/notebooks-bgd.webp";
import { useEffect } from "react";

/**
 * Renders Home page text and shop now button
 * 
 * @returns {JSX.Element}
 */
const Home = () => {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = bgdImage;
        link.type = "image/webp";
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link); //Cleanup if component unmounts
        }
    }, []);

    return (
        <section className={`${styles.section} ${styles.bgdImage}`}>
            <h1><b><i>Daywish Stationary</i></b></h1>
            <Link className={styles.linkButton} to="/shop">Shop Now</Link>
        </section>
    )
};

export default Home;