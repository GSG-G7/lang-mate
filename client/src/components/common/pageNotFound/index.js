import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const UnderConstruct = () => {
  return (
    <div className="under-construct">
      <h2 className="under-construct__heading">Page Not Found</h2>
      <p className="under-construct__text">
        Go to the <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default UnderConstruct;
