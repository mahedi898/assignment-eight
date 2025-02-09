import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCardList, removedCard } from "../Utility/addToDb";

import DashCard from "../DashCard/DashCard";

const DashboardCard = () => {
  

  const [productList, setProductList] = useState([]);

  const allProducts = useLoaderData();
  useEffect(() => {
    const storedCardList = getStoredCardList();
    const allProductsList = allProducts.filter((product) =>
      storedCardList.includes(product.product_id)
    );
    setProductList(allProductsList);
  }, [allProducts]);
  const handleRemove = (id) =>{
    removedCard(id)
    const storedCardList = getStoredCardList();
    const allProductsList = allProducts.filter((product) =>
      storedCardList.includes(product.product_id)
    );
    setProductList(allProductsList);
  
    
  }



  return (
    <div>
      <div className="-mt-40 flex justify-between">
        <h1 className="text-2xl font-bold">Card {productList.length}</h1>

        <div>
          <button className="btn btn-outline btn-primary mr-5">
            Sort by price
          </button>
          <button className="btn btn-outline btn-primary">Purchase</button>
        </div>
      </div>
      <div className="w-[700px] mx-auto">
        {productList.map((product) => (
          <DashCard handleRemove={handleRemove} key={product.product_id} product={product}></DashCard>
        ))}
      </div>

    </div>
  );
};

export default DashboardCard; 
