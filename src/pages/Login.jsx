import { useState } from "react";
import "../css/Login.css";
import { InputField } from "../component/InputField";

export const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleLoginInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const SubmitUserLogin = (e) => {
    e.preventDefault();
    const { email, password } = userLogin;

    fetch("http://localhost:1234/user/login", {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
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
        <h1>Log-In</h1>
        <form action="POST" onSubmit={SubmitUserLogin}>
          <InputField
            user={userLogin.email}
            handleInput={handleLoginInput}
            name="email"
            type="text"
          />
          <InputField
            user={userLogin.password}
            handleInput={handleLoginInput}
            name="password"
            type="number"
          />
          <input type="submit" name="login" value="login" />
        </form>
      </div>
    </div>
  );
};
