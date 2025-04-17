import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <section className={styles.section}>
            <h1><b><i>Shop Name</i></b></h1>
            <Link className={styles.linkButton} to="/shop">Shop Now</Link>
        </section>
    )
};

export default Home;