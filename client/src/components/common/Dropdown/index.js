import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Dropdown = ({ labelText, name, languages, value, onChange, ...rest }) => {
  return (
    <div className="drop-down">
      <span className="drop-down__desc">{labelText}</span>
      <select
        name={name}
        aria-label={labelText}
        id="select"
        className="drop-down__menu"
        value={value}
        onChange={onChange}
        {...rest}
      >
        {/* Creating an option for each language in the array */}
        {languages.map(({ id, language }) => (
          <option className="drop-down__item" key={id} value={id}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.defaultProps = {
  value: 1,
};

Dropdown.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
