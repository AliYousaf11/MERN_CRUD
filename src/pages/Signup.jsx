import { useState } from "react";
import "../css/Login.css";
import { InputField } from "../component/InputField";

export const Signup = () => {
  const [userSignup, setUserSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const HandleSignUpInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserSignUp({ ...userSignup, [name]: value });
  };
  const SubmitUserSignUp = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, phoneNumber } = userSignup;

    fetch("http://localhost:1234/user/signup", {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        phoneNumber: phoneNumber,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        alert(res.message);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="main">
      <div className="login">
        <h1>Sign-Up</h1>
        <form action="POST" onSubmit={SubmitUserSignUp}>
          <InputField
            user={userSignup.name}
            handleInput={HandleSignUpInput}
            name="name"
            type="text"
          />
          <InputField
            user={userSignup.email}
            handleInput={HandleSignUpInput}
            name="email"
            type="text"
          />
          <InputField
            user={userSignup.password}
            handleInput={HandleSignUpInput}
            name="password"
            type="number"
          />
          <InputField
            user={userSignup.confirmPassword}
            handleInput={HandleSignUpInput}
            name="confirmPassword"
            type="number"
          />
          <InputField
            user={userSignup.phoneNumber}
            handleInput={HandleSignUpInput}
            name="phoneNumber"
            type="number"
          />
          <input type="submit" name="signup" value="Sign-Up" />
        </form>
      </div>
    </div>
  );
};
