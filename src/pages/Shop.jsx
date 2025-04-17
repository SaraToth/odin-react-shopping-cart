import { useEffect, useState } from "react";

const Shop = () => {
    const [shopData, setShopData] = useState([]);

    useEffect(() => {
        async function fetchShopData () {
            const response = await fetch('https://fakestoreapi.com/products/');
            const shopData = await response.json();
            
            const filteredData = [];

            shopData.map((item) => {
                const filteredItem = createDataObject(item);
                filteredData.push(filteredItem);
            })

            setShopData(filteredData);
        }

        fetchShopData();
    }, []);

    const createDataObject = (item) => {
        return {
            imageURL: item.image,
            price: item.price,
            title: item.title,
            id: item.id,
            description: item.description,
        }
    }

    return (
        <h1>This is the Shop page.</h1>
    )
};

export default Shop;