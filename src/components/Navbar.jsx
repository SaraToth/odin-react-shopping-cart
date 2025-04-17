import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import cart from "../assets/shopping-cart.png";

const Navbar = ({cartNumber}) => {

    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li><Link className={styles.link} to={"/"} ><p><b><i>Daywish Stationary</i></b></p></Link></li>
                <li><Link className={styles.link} to ="/">Home</Link></li>
                <li><Link className={styles.link} to="/Shop">Shop</Link></li>
            </ul>
            <span><img alt="cart" className={styles.cart} src={cart}/></span>
            {cartNumber > 0 && <span className={styles.badge}>{cartNumber}</span>}
        </nav>
    )
}

export default Navbar;