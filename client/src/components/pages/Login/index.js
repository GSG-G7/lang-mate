import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import Button from '../../common/Button';
import Input from '../../common/Input';
import BackButton from '../../common/BackButton';

import api from '../../../services/api';

class Login extends Component {
  state = {
    username: '',
    password: '',
    errMSg: '',
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleClick = () => {
    const { username, password } = this.state;
    const { push } = this.props.history;
    api
      .login({
        username,
        password,
      })
      .then(res => {
        if (res.isSuccess) {
          return push('/');
        }
        return this.setState({ errMSg: res.message });
      });
  };

  render() {
    const { username, password, errMSg } = this.state;
    const { goBack } = this.props.history;
    return (
      <div className="loginPage">
        <div className="backBtn">
          <BackButton back={() => goBack()} />
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
            {errMSg}
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
Login.propTypes = {
  goBack: PropTypes.func.isRequired,
};
export default Login;
