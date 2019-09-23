import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Checkbox = ({ id, interest, checked = false, className, onClick }) => (
  <div className="interest__home">
    <input
      id={id}
      type="checkbox"
      value={interest}
      className={className}
      checked={checked}
      onChange={onClick}
    />
    <label htmlFor={id}>
      <span></span>
      {interest}
    </label>
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  interest: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Checkbox;
