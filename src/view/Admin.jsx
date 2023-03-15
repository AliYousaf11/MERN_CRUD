import React, { useEffect, useState } from "react";
import "../css/Admin.css";
import { AdminCard } from "../component/AdminCard";

export const Admin = () => {
  const [adminproduct, setAdminProduct] = useState([]);

  const [pagenumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [updateid, setUpdateId] = useState("");
  const [updatename, setUpdateName] = useState("");
  const [updatequantity, setUpdateQuantity] = useState("");
  const [updateprice, setUpdatePrice] = useState("");

  const paginationbtn = new Array(totalPages)
    .fill(null)
    .map((ele, index) => index);

  useEffect(() => {
    fetch(`http://localhost:5000/product/getproductadmin?page=${pagenumber}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setAdminProduct(res.data);
        setTotalPages(res.TotalPages);
      })
      .catch((error) => {
        alert(error);
      });
  }, [pagenumber]);

  // callback
  const parentAlert = (id, name, price, quantity) => {
    alert("Admin Card: ", id, name, price, quantity);
    console.log(id, name, quantity, price);
    setUpdateId(id);
    setUpdateName(name);
    setUpdatePrice(price);
    setUpdateQuantity(quantity);
  };

  const SubmitUpdateUser = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/product/updateproduct/${updateid}`, {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "PUT",
      body: JSON.stringify({
        id: updateid,
        name: updatename,
        price: updateprice,
        quantity: updatequantity,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        alert(res.message);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="AdminForm">
      <form method="PUT" onSubmit={SubmitUpdateUser}>
        <input
          type="text"
          value={updatename}
          onChange={(e) => setUpdateName(e.target.value)}
        />
        <input
          type="text"
          value={updateprice}
          onChange={(e) => setUpdatePrice(e.target.value)}
        />
        <input
          type="text"
          value={updatequantity}
          onChange={(e) => setUpdateQuantity(e.target.value)}
        />
        <input
          type="text"
          value={updateid}
          onChange={(e) => setUpdateId(e.target.name)}
        />
        <input type="submit" value="Update User" />
      </form>

      <div className="AdminPage">
        <div className="Admin">
          {adminproduct.map((product) => {
            return (
              <AdminCard
                key={product._id}
                price={product.price}
                name={product.name}
                quantity={product.quantity}
                id={product._id}
                parentAlert={parentAlert}
              />
            );
          })}
        </div>
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
    </div>
  );
};
