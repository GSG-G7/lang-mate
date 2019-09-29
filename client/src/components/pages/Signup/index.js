import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import BackButton from '../../common/BackButton';
import Input from '../../common/Input';
import Button from '../../common/Button';

export default class signup extends Component {
  state = {
    username: '',
  };

  render() {
    const { username, email, password, confirmPassword } = this.state;
    return (
      <div>
        <h2>Join Us Now</h2>
        <form id="signup" className="signup__form" method="POST">
          <BackButton onClick={() => HashRouter.push('/')} />
          <Input
            type="text"
            name="username"
            className=""
            label="username"
            placeholder="Username"
            value={username}
            onChange={({ target: { value } }) =>
              this.setState({ username: value })
            }
            errMsg="You entered an exist username"
          />
          <Input
            type="email"
            name="email"
            className=""
            label="email"
            placeholder="Email"
            value={email}
            onChange={({ target: { value } }) => {
              this.setState({ email: value });
            }}
            errMsg="You entered an exist email"
          />
          <Input
            type="password"
            name="password"
            className=""
            label="passeord"
            placeholder="Password"
            value={password}
            onChange={({ target: { value } }) => {
              this.setState({ password: value });
            }}
            errMsg="You entered weak password"
          />
          <Input
            type="password"
            name="confirmPassword"
            className=""
            label="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={({ target: { value } }) => {
              this.setState({ confirmPassword: value });
            }}
            errMsg="The password is not matching"
          />
          <Button text="Next" className="" />
        </form>
      </div>
    );
  }
}
