import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

export const AdminForm = ({}) => {
  const [pname, setName] = useState("");
  const [pprice, setPrice] = useState("");
  const [qquantity, setQuantity] = useState("");
  const [id, setId] = useState("");

  return (
    <div className="AdminForm">
      <form action="PUT">
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
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
        <button type="submit">
          <span>
            <FaEdit />
          </span>
          Update Product
        </button>
      </form>
    </div>
  );
};



// fetch(`http://localhost:1234/product/updateproduct/${data.id}`, {
//       headers: {
//         "content-type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       method: "PUT",
//       body: JSON.stringify({
//         name: data.name,
//         price: data.price,
//         quantity: data.quantity,
//       }),
//     })
//       .then((response) => response.json())
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((error) => console.log(error));
