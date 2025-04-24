import { useOutletContext } from "react-router-dom";
import styles from "./ShopCard.module.css";

/**
 * Renders a product card with title, price, image, and add to cart button
 * 
 * @typedef {Object} ShopItem
 * @property {string} imageURL
 * @property {number} price
 * @property {string} title
 * @property {number} id
 * @property {string} description
 * 
 * @typedef {Object} ShopCardProps
 * @property {ShopItem} shopItem Object of product info fetched from API
 * 
 * @param {ShopCardProps} props
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