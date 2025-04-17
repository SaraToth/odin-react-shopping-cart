import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import cart from "../assets/shopping-cart.png";

const Navbar = ({cartNumber}) => {

    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li><Link className={styles.link} to ="/">Home</Link></li>
                <li><Link className={styles.link} to="/Shop">Shop</Link></li>
            </ul>
            <span><img className={styles.cart} src={cart}/></span>
            <span className={styles.badge}>3</span>
            {cartNumber > 0 && cartNumber + " items in cart"}
            {cartNumber === 0 && "Cart is empty"}
        </nav>
    )
}

export default Navbar;