import { useEffect, useState } from "react";
import ShopCard from "../components/ShopCard";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Shop = () => {
    const [shopData, setShopData] = useState([]);
    const {cartNumber, setCartNumber} = useOutletContext();
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchShopData () {
            try {
                const response = await fetch('https://fakestoreapi.com/roducts/', { mode: "cors"});

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
            }
        }

        fetchShopData()
    }, []);


    return (
        <section className={styles.section}>
            <span className={styles.span}><h1>SHOP</h1></span>

            <div className={styles.shopGrid}>
                {error && <ErrorPage />}
                {shopData &&  shopData.map((shopItem) => {
                   return ( <ShopCard cartNumber={cartNumber} setCartNumber={setCartNumber} shopItem={shopItem} key={shopItem.id} />)
                })}
            </div>
        </section>

    )
};

export default Shop;