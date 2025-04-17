import styles from "./ShopCard.module.css";

const ShopCard = ({shopItem, cartNumber, setCartNumber}) => {

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