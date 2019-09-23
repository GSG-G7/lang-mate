import React from 'react';
import './index.css';

const DropDown = ({ label, name, languages }) => {
  return (
    <div className="drop-down">
      <label htmlFor="select">{label}</label>
      <select name={name} id="select">
        {languages.map(({ id, language }) => (
          <option key={id} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
