import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Checkbox = ({ id, value, onClick, name }) => (
  <div className="checkbox__home">
    <label htmlFor={id} className="checkbox_label">
      <input
        id={id}
        type="checkbox"
        value={value}
        name={name}
        onClick={onClick}
        className="checkbox"
      />
      <div className="round"></div>
      {/* <span className="checkbox_span"></span> */}
      {value}
    </label>
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
Checkbox.defaultProps = {
  id: 1,
};

export default Checkbox;
