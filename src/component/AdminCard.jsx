import React from "react";
import "../css/Admin.css";
import { FaEdit, FaTrash } from "react-icons/fa";

export const AdminCard = ({ name, id, price, quantity, parentAlert }) => {
  const HandleRemove = (id) => {
    fetch(`http://localhost:1234/product/getproduct/${id}`, {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((res) => {
        alert(res.message);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AdminCard">
      <div>
        <img
          src="https://www.w3schools.com/bootstrap4/img_avatar1.png"
          alt=""
        />
      </div>
      <div>
        <p>
          {name} <span>${price}</span>
        </p>
        <p>
          Quantity:{quantity} Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Magnam rerum ducimus tempora.
        </p>
        <button onClick={() => HandleRemove(id)}>
          <span>
            <FaTrash />
          </span>
          Remove
        </button>
        <button onClick={() => parentAlert(id,name,price,quantity)}>
          <span>
            <FaEdit />
          </span>
          Update
        </button>
      </div>
    </div>
  );
};
