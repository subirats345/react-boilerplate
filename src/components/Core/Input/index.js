import React from "react";

const Input = ({ name, value, onChange, type, placeholder, autoComplete }) => {
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
