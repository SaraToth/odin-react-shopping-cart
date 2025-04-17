import { useEffect, useState } from "react";
import ShopCard from "../components/ShopCard";
import styles from "./Shop.module.css";

const Shop = () => {
    const [shopData, setShopData] = useState([]);

    useEffect(() => {
        async function fetchShopData () {
            const response = await fetch('https://fakestoreapi.com/products/');
            const rawShopData = await response.json();
            
            const filteredData = [];

            rawShopData.map((rawData) => {
                const item = {
                    imageURL: rawData.image,
                    price: rawData.price,
                    title: rawData.title,
                    id: rawData.id,
                    description: rawData.description,
                };

                filteredData.push(item);
            })

            setShopData(filteredData);
        }

        fetchShopData();
    }, []);


    return (
        <div>
            <h1>This is the Shop page.</h1>
            <div className={styles.shopGrid}>
                {shopData &&  shopData.map((shopItem) => {
                   return ( <ShopCard shopItem={shopItem} key={shopItem.id} />)
                })}
            </div>
        </div>

    )
};

export default Shop;