import styles from "./ShopCard.module.css";

const ShopCard = ({shopItem}) => {

    return (
        <div className={styles.card}>
            <span className={styles.span}><img className={styles.img} src={shopItem.imageURL}/></span>
            <div className={styles.cardText}>
                <p>{shopItem.title}</p>
                <p className={styles.price}>${shopItem.price}</p>
            </div>
        </div>
    )
}

export default ShopCard;