/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './index.css';
import PropTypes from 'prop-types';
import Button from '../../common/Button';
import Input from '../../common/Input';
import BackButton from '../../common/BackButton';
import api from '../../../services/api';
import auth from '../../Auth/auth';

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
    const { setUserInfo } = this.props;

    if (username && password) {
      const {
        history: { push },
        location: { state },
      } = this.props;

      api
        .login({
          username,
          password,
        })
        .then(({ data }) => {
          if (data) {
            auth.setUserInfo(data);
            auth.isAuthenticated = true;
            setUserInfo(data);
            const prevPath = state.from.pathname;
            if (prevPath) {
              return push(prevPath);
            }
            return push('/');
          }
          throw Error('Check username or password ..! ');
        })
        .catch(err => this.setState({ errMSg: err.message }));
    } else {
      this.setState({ errMSg: 'Pls, Enter value' });
    }
  };

  render() {
    const { username, password, errMSg } = this.state;
    const {
      history: { goBack },
    } = this.props;

    const { location } = this.props;
    if (auth.isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      );
    }
    return (
      <div className="login-page">
        <div className="login-box">
          <form action="/" className="login-form">
            <div className="back-btn">
              <BackButton back={goBack} />
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
