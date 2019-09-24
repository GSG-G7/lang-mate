import React from 'react';
import propTypes from 'prop-types';
import './index.css';

const BackButton = ({ back }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={back}
    onKeyDown={e =>
      e.key === 'Backspace' || e.key === 'Escape' ? back() : null
    }
  >
    <svg
      width="64"
      height="56"
      viewBox="0 0 64 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="56" fill="white" />
      <path
        d="M38 18.9667L36.0171 17L25 28L36.0283 39L38 37.0333L28.9434 28L38 18.9667Z"
        fill="black"
        fillOpacity="0.54"
      />
    </svg>
  </div>
);
BackButton.propTypes = {
  back: propTypes.func.isRequired,
};

export default BackButton;
