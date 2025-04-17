import styles from "./ShopCard.module.css";

const ShopCard = ({shopItem, cartNumber, setCartNumber}) => {

    const handleClick = () => {
        const currentNumber = cartNumber + 1;
        setCartNumber(currentNumber);
    }

    return (
        <div className={styles.card}>
            <span className={styles.span}><img className={styles.img} src={shopItem.imageURL}/></span>
            <div className={styles.cardText}>
                <p>{shopItem.title}</p>
                <p className={styles.price}>${shopItem.price}</p>
            </div>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    )
}

export default ShopCard;