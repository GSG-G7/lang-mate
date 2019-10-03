import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Input = ({
  type,
  name,
  className,
  label,
  placeholder,
  value,
  onChange,
  errMsg,
}) => {
  return (
    <div className="input">
      <input
        type={type}
        name={name}
        className={`custom-input ${className}`}
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      <span className="err-msg">{errMsg}</span>
    </div>
  );
};

Input.defaultProps = {
  errMsg: '',
};

// Checking for the value of the props
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errMsg: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.string,
};

export default Input;
