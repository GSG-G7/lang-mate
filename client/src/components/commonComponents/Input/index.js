import React from 'react';
import './index.css';

const Input = ({ type, name, label, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      aria-label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
