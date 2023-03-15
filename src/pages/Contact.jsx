import { useState } from "react";
import "../css/Contact.css";
import { InputField } from "../component/InputField";

export const Contact = () => {
  const [userContact, setUserContact] = useState({
    name: "",
    email: "",
    cell: "",
    message: "",
  });

  const HandleContactInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserContact({ ...userContact, [name]: value });
  };
  const SubmitUserContact = (e) => {
    e.preventDefault();
    const { name, email, cell, message } = userContact;

    fetch("http://localhost:5000/user/contact", {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        cell: cell,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        alert(res.message);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="userContact">
      <h1>Contact-Up</h1>
      <form action="POST" onSubmit={SubmitUserContact}>
        <InputField
          user={userContact.name}
          handleInput={HandleContactInput}
          name="name"
          type="text"
        />
        <InputField
          user={userContact.email}
          handleInput={HandleContactInput}
          name="email"
          type="text"
        />
        <InputField
          user={userContact.cell}
          handleInput={HandleContactInput}
          name="cell"
          type="number"
        />
        <InputField
          className="message"
          user={userContact.message}
          handleInput={HandleContactInput}
          name="message"
          type="text"
        />
        <input type="submit" name="Contact" value="SEND" />
      </form>
    </div>
  );
};
