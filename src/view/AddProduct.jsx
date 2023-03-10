import {useState } from "react";
import "../css/Login.css";
import { InputField } from "../component/InputField";

export const AddProduct = () => {
  const [createproduct, setCreateProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const handleProductInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCreateProduct({ ...createproduct, [name]: value });
  };
  const SubmitCreateProduct = (e) => {
    e.preventDefault();
    const { name, price, quantity } = createproduct;

    fetch("http://localhost:1234/product/addproduct", {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        price: price,
        quantity: quantity,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        alert(res.mesage);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="main">
      <div className="login">
        <h1>Add Products</h1>
        <form action="POST" onSubmit={SubmitCreateProduct}>
          <InputField
            user={createproduct.name}
            handleInput={handleProductInput}
            name="name"
            type="text"
          />
          <InputField
            user={createproduct.price}
            handleInput={handleProductInput}
            name="price"
            type="number"
          />
          <InputField
            user={createproduct.quantity}
            handleInput={handleProductInput}
            name="quantity"
            type="number"
          />
          <input type="submit" name="Add Product" value="Add Product" />
        </form>
      </div>
    </div>
  );
};
