import React from "react";
import "../css/Admin.css";

export const AdminCard = ({ name, id, price, quantity }) => {
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
    <div>
      <div className="main">
        <div className="card">
          <img src="" alt="" />
          <div>
            <p>{name}</p>
            <p>
              {quantity}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              rerum ducimus tempora laboriosam.
            </p>
          </div>
          <button>
            <span>{price}$</span>
          </button>
          {/* onClick={() => parentAlert(id, name, price, quantity)} */}
          <button>Edit</button>
          <button onClick={() => HandleRemove(id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};
