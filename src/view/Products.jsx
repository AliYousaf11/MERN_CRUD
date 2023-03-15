import React, { useEffect, useState } from "react";
import { ProductsCard } from "../component/ProductsCard";
import "../css/Products.css";

export const Products = () => {
  const [allproduct, setAllProduct] = useState([]);
  const [pagenumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const paginationbtn = new Array(totalPages)
    .fill(null)
    .map((ele, index) => index);

  useEffect(() => {
    fetch(`http://localhost:5000/product/getproductuser?page=${pagenumber}`, {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        setAllProduct(res.data);
        setTotalPages(res.TotalPages);
      })
      .catch((error) => console.log(error));
  }, [pagenumber]);

  return (
    <>
      <div className="Product">
        {allproduct.map((product) => {
          return (
            <ProductsCard
              key={product._id}
              price={product.price}
              name={product.name}
              // quantity={product.quantity}
            />
          );
        })}
      </div>
      <div className="pgnbtn">
        {paginationbtn.map((paginationIndex) => {
          return (
            <div key={paginationIndex}>
              <button
                onClick={() => setPageNumber(paginationIndex)}
                className="btn"
              >
                {paginationIndex + 1}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
