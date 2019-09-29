import React, { Component } from 'react';
import './index.css';
import Button from '../../common/Button';
import Input from '../../common/Input';
import login from '../../../services/api';

class Login extends Component {
  state = {};

  render() {
    return (
      <div className="loginPage">
        <div className="loginBox">
          <form action="/" className="login-form">
            <div className="backBtn"></div>
            <div className="login-wlecome">
              <h1>Welcome Back</h1>
            </div>
            <div className="login-inpputs">
              <input
                type="text"
                placeholder="username"
                className="username-input"
                aria-label="username"
                name="username-input"
              />
              <input
                type="text"
                placeholder="password"
                className="password-input"
                name="username-password"
                aria-label="password"
              />
            </div>
            <div className="login-btn">
              <Button text="Login" className="submit-btn" onClick={login} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
