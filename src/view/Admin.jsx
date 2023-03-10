import React, { useEffect, useState } from "react";
import "../css/Admin.css";
import { AdminCard } from "../component/AdminCard";

export const Admin = () => {
  const [adminproduct, setAdminProduct] = useState([]);

  const [pname, setName] = useState("");
  const [pprice, setPrice] = useState("");
  const [qquantity, setQuantity] = useState("");

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
        setAdminProduct(res.data);
      })
      .catch((error) => console.log(error));
  },[]);

  // callback
  // const parentAlert=(data)=>{
  //   alert("Data received from child", data.id);
  //   setName(data.name);
  //   setPrice(data.price);
  //   setQuantity(data.quantity);

  //   fetch(`http://localhost:1234/product/updateproduct/${data.id}`, {
  //     headers: {
  //       "content-type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     method: "PUT",
  //     body: JSON.stringify({
  //       name: data.name,
  //       price: data.price,
  //       quantity: data.quantity,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((res) => {
  //       parentAlert(res.data);
  //       console.log(res.data);
  //       alert(res.message);
  //     })
  //     .catch((error) => console.log(error));
  // }

  return (
    <div className="Admin">
      <div> 
        <form action="">
          <input
            type="text"
            value={pname}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={pprice}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            value={qquantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button>Update Product</button>
        </form>
      </div>
      <div>
        {adminproduct.map((product) => {
          return (
            <AdminCard
              key={product._id}
              price={product.price}
              name={product.name}
              quantity={product.quantity}
              id={product._id}
              // parentAlert={parentAlert}
            />
          );
        })}
      </div>
    </div>
  );
};
