import { useOutletContext } from "react-router-dom";
import styles from "./ShopCard.module.css";

/**
 * Renders a product card with title, price, image, and add to cart button
 * 
 * @typedef {import("../utils/types.jsdoc").ShopItem} ShopItem
 * 
 * @param {{ shopItem: ShopItem }} props
 * @returns {JSX.Element}
 */
const ShopCard = ({shopItem}) => {
    const {cartNumber, setCartNumber} = useOutletContext();

    const handleClick = () => {
        const currentNumber = cartNumber + 1;
        setCartNumber(currentNumber);
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <span className={styles.span}><img className={styles.img} src={shopItem.imageURL}/></span>
                <div className={styles.cardText}>
                    <p>{shopItem.title}</p>
                    <p className={styles.price}>${shopItem.price}</p>
                </div>
            </div>
            <button className={styles.button} onClick={handleClick}>Add to Cart</button>
        </div>
    )
}

export default ShopCard;