import React, { Component } from 'react';
import './index.css';
import Button from '../../common/Button';
import Input from '../../common/Input';
import BackButton from '../../common/BackButton';

import api from '../../../services/api';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleClick = () => {
    const { username, password } = this.state;
    console.log(username, password);
    api
      .login({
        username,
        password,
      })
      .then(res => {
        console.log(res);
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="loginPage">
        <div className="backBtn">
          <BackButton back={() => console.log('the url for previous page  ')} />
        </div>
        <div className="loginBox">
          <form action="/" className="login-form">
            <div className="login-wlecome">
              <h1>Welcome Back</h1>
            </div>
            <div className="login-inpputs">
              <Input
                type="text"
                name="username"
                className="username"
                label="username"
                placeholder="username"
                value={username}
                onChange={this.handleChange}
              />
              <Input
                type="password"
                name="password"
                className="password"
                label="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="login-btn">
              <Button
                text="Login"
                className="submit-btn"
                onClick={this.handleClick}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
