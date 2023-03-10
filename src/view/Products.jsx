import React, { useEffect, useState } from "react";
import { ProductsCard } from "../component/ProductsCard";

export const Products = () => {
  const [allproduct, setAllProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1234/product/getproduct", {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        setAllProduct(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  
  return (
    <div className="ProductMain">
      {allproduct.map((product) => {
        return (
          <ProductsCard
            key={product._id}
            price={product.price}
            name={product.name}
            quantity={product.quantity}
          />
        );
      })}
    </div>
  );
};
