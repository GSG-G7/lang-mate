import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Dropdown = ({ labelText, name, languages, value, onChange }) => {
  return (
    <div className="drop-down">
      <span className="menu-desc">{labelText}</span>
      <select
        name={name}
        aria-label={labelText}
        id="select"
        className="drop-down-menu"
        value={value}
        onChange={onChange}
      >
        {/* Creating an option for each language in the array */}
        {languages.map(({ id, language }) => (
          <option className="drop-down-item" key={id} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
