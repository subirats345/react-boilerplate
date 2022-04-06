import React from "react";

const Input = ({ name, value, type, onChange, placeholder, autoComplete }) => {
  return (
    <input
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
