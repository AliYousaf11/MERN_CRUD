import React from "react";
import "../css/Products.css";

export const ProductsCard = ({ name, price, quantity }) => {
  return (
    <div className="card">
      <img src="" alt="" />
      <div>
        <p>{name}</p>
        <p>
          {quantity}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam rerum
          ducimus tempora laboriosam.
        </p>
      </div>
      <button>
        <span>${price}</span>
        Add
      </button>
    </div>
  );
};
