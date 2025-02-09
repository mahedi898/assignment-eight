import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const ProductsCard = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    if (category) {
        const filterCategory = [...data].filter(
            (product) => product.category === category
          );
          setProducts(filterCategory)
    }
    else{
        setProducts(data)
    }
  }, [category, data]);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {products.map((product) => (
        <Card key={product.product_id} product={product}></Card>
      ))}
    </div>
  );
};

export default ProductsCard;
