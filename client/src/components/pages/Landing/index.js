import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import { logo } from '../../assets/svgPaths';
import './index.css';

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing__logo">
        <svg
          width="188"
          height="158"
          viewBox="0 0 188 158"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={logo} fill="url(#paint0_linear)" />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="24.6543"
              y1="138.684"
              x2="162.967"
              y2="0.370704"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#52DE97" />
              <stop offset="1" stopColor="#3C9D9B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="landing__text">
        <h1 className="landing__heading">LangMate</h1>
        <p className="landing__paragraph">
          A way to practice the language you like with a person you like
        </p>
      </div>
      <div className="landing__buttons">
        <Link to="/login">
          <Button text="login" className="landing__login-button" />
        </Link>
        <Link to="/sign-up">
          <Button text="sign up" className="landing__signUp-button" />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
