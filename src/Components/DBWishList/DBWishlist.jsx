import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList, removedCardWish,  } from "../Utility/addToDb";


import DashWish from "../DashWish/DashWish";

const DashboardCard = () => {
    const [productList, setProductList] = useState([]);

    const allProducts = useLoaderData();
    useEffect(() =>{
        const storedCardList = getStoredWishList();
        const allProductsList = allProducts.filter(product=>storedCardList.includes(product.product_id))
        setProductList(allProductsList)
    },[allProducts])
    const handleRemove = (id) =>{
      removedCardWish(id)
      const storedCardList = getStoredWishList();
        const allProductsList = allProducts.filter(product=>storedCardList.includes(product.product_id))
        setProductList(allProductsList)
      
    }

  return (
    <div>
      <div className="-mt-40 flex justify-between">
      <h1 className="text-2xl font-bold">Whish List {productList.length}</h1>
    </div>
    <div className="w-[700px] mx-auto">
    {
      productList.map(product => <DashWish handleRemove={handleRemove}  key={product.product_id} product={product}></DashWish> )
    }
    </div>
    </div>
  );
};

export default DashboardCard;
