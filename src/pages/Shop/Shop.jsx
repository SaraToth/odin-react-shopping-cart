import { useEffect, useState } from "react";
import ShopCard from "../../components/ShopCard/ShopCard";
import styles from "./Shop.module.css";
import ErrorPage from "../ErrorPage";


/**
 * Renders the Shop Page and the product cards
 * 
 * @returns {JSX.Element} Renders shop Page content
 */
const Shop = () => {
    const [shopData, setShopData] = useState([]); // API data stored as array of objects
    const [error, setError] = useState(null); // Handles API error
    const [loading, setLoading] = useState(true); // Handles API loading

    useEffect(() => {
        /**
         * Fetches shop product information from API and updates shopData state
         * 
         * @returns {void}
         */
        async function fetchShopData () {
            try {
                const response = await fetch('https://fakestoreapi.com/products/', { mode: "cors"});

                if(response.status >= 400) {
                    throw new Error("server error");
                }

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

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchShopData()
    }, []);


    return (
        <section className={styles.section}>
            <span className={styles.span}><h1>SHOP</h1></span>

            <div className={styles.shopGrid}>
                {loading && <p>Loading...</p>}
                {error && <ErrorPage />}
                {shopData &&  shopData.map((shopItem) => {
                   return ( <ShopCard shopItem={shopItem} key={shopItem.id} />)
                })}
            </div>
        </section>

    )
};

export default Shop;