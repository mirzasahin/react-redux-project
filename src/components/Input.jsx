import React from "react";

const Input = ({value, placeholder, type, name, id, onChange }) => {
  return (
    <input
      className="h-10 w-full border rounded-md p-2 outline-none my-2 mt-3"
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
