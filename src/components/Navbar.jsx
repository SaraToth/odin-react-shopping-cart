import { Link } from "react-router-dom";
const Navbar = ({cartNumber}) => {

    return (
        <nav>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/Shop">Shop</Link></li>
            </ul>
            {cartNumber > 0 && cartNumber + " items in cart"}
            {cartNumber === 0 && "Cart is empty"}
        </nav>
    )
}

export default Navbar;