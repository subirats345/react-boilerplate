import React from "react";

const Input = ({ name, value, type, onChange, placeholder, autoComplete }) => {
  return (
    <input
      className="input input-bordered w-full mb-3"
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
