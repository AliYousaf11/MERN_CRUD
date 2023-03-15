import React from "react";
import { FaShoppingBag } from "react-icons/fa";

export const ProductsCard = ({ name, price }) => {
  return (
    <div className="ProductCard">
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam rerum
          ducimus tempora laboriosam.
        </p>
        <button>
          <span>
            <FaShoppingBag />
          </span>
          Add To Card
        </button>
      </div>
    </div>
  );
};
