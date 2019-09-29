import React, { Component } from 'react';
import './index.css';
import Button from '../../common/Button';
import Input from '../../common/Input';
import BackButton from '../../common/BackButton';

import { loginFun, inputFun } from '../../../services/api';

class Login extends Component {
  state = {};

  render() {
    return (
      <div className="loginPage">
        <div className="backBtn"></div>
        <div className="loginBox">
          <form action="/" className="login-form">
            <div className="login-wlecome">
              <h1>Welcome Back</h1>
            </div>
            <div className="login-inpputs">
              <Input
                type="text"
                name="username-input"
                className="username"
                label="username"
                placeholder="username"
                value=""
                onChange={inputFun}
                errMsg=""
              />
              {/* <input
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
              /> */}
              <Input
                type="text"
                name="username-passwrd"
                className="password"
                label="password"
                placeholder="password"
                value=""
                onChange={inputFun}
                errMsg=" "
              />
            </div>
            <div className="login-btn">
              <Button text="Login" className="submit-btn" onClick={loginFun} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
