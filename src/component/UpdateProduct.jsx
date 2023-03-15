import { useState } from "react";
import "../css/Login.css";

export const UpdateProduct = ({id, name, price, quantity}) => {
  const [createproduct, setCreateProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  
  const handleInput = (e) => {
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
        <h1>Update Products</h1>
        <form action="POST" onSubmit={SubmitCreateProduct}>
          <div className="inputBox">
            <input
              name="name"
              type="text"
              onChange={handleInput}
              autoComplete="off"
              required
            />
            <label htmlFor="email">Name</label>
          </div>
          <div className="inputBox">
            <input
              name="price"
              type="number"
              onChange={handleInput}
              autoComplete="off"
              required
            />
            <label htmlFor="email">Price</label>
          </div>
          <div className="inputBox">
            <input
              name="quantity"
              type="number"
              onChange={handleInput}
              autoComplete="off"
              required
            />
            <label htmlFor="email">quantity</label>
          </div>
          <input type="submit" name="Add Product" value="Add Product" />
        </form>
      </div>
    </div>
  );
};
