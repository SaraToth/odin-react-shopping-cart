import { useEffect, useState } from "react";

const Shop = () => {
    const [shopData, setShopData] = useState([]);

    useEffect(() => {
        async function fetchShopdata () {
            const response = await fetch('https://fakestoreapi.com/products/');
            const shopData = await response.json();
            console.log(shopData);


        }
        fetchShopdata();
    }, []);

    return (
        <h1>This is the Shop page.</h1>
    )
};

export default Shop;