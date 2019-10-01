import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const {
      history: { push },
    } = this.props;
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
    const {
      history: { goBack },
    } = this.props;
    return (
      <div className="login-page">
        <div className="login-box">
          <form action="/" className="login-form">
            <div className="back-btn">
              <BackButton back={() => goBack()} />
            </div>
            <div className="login-wlecome">
              <h1>Welcome Back</h1>
            </div>
            <div className="username-input">
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
            <div className="error-msg">{errMSg}</div>
            <div className="login-btn">
              <Button
                text="Login"
                className="submit-btn"
                onClick={this.handleClick}
              />
            </div>
            <div className="signup-link">
              <h5>
                Don’t have an account? &nbsp;&nbsp;
                <Link to="/sign-up">
                  <span className="signup-link_span">Signup!</span>
                </Link>
              </h5>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
