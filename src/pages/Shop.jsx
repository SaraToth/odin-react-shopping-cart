import { useEffect, useState } from "react";

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
        <h1>This is the Shop page.</h1>
    )
};

export default Shop;