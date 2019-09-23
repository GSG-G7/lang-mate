import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const langs = [
  {
    id: 1,
    language: 'Chinese',
  },
  {
    id: 2,
    language: 'Spanish',
  },
  {
    id: 3,
    language: 'English',
  },
  {
    id: 4,
    language: 'Hindi',
  },
  {
    id: 5,
    language: 'Russian',
  },
];

const Dropdown = ({ label, name, languages = langs }) => {
  return (
    <div className="drop-down">
      <label htmlFor="select">
        {label}
        <select name={name} id="select">
          {languages.map(({ id, language }) => (
            <option key={id} value={language}>
              {language}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf.isRequired,
};

export default Dropdown;
