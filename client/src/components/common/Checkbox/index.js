import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Checkbox = ({ id, value, checked, onClick }) => (
  <div className="checkbox__home">
    <label htmlFor={id} className="checkbox_label">
      <input
        id={id}
        type="checkbox"
        value={value}
        className="checkbox__input"
        checked={checked}
        onClick={onClick}
      />
      <span className="checkbox_span"></span>
      {value}
    </label>
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
