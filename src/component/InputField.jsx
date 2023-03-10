import React from "react";

export const InputField = ({ user, handleInput, name, type }) => {
  return (
    <div className="inputBox">
      <input
        name={name}
        type={type}
        username={user}
        onChange={handleInput}
        autoComplete="off"
        required
      />
      <label htmlFor="email">{name}</label>
    </div>
  );
};
