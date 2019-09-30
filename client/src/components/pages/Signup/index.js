import React, { Component } from 'react';
// import { BrowserHistory } from 'react-router-dom';
import signupValidation from '../utils/signupValidation';
import BackButton from '../../common/BackButton';
import Input from '../../common/Input';
import Button from '../../common/Button';
import Dropdown from '../../common/Dropdown';
import Checkbox from '../../common/Checkbox';
import './index.css';

export default class signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    nativeLang: '',
    learnLang: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSignup = e => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = this.state;
    signupValidation
      .validate(
        { username, email, password, confirmPassword },
        { abortEarly: false }
      )
      .then(values => {
        return values;
      })
      .catch(error => {
        const errorMessages = {};
        error.inner.forEach(element => {
          errorMessages[element.path] = element.message;
        });
      });
  };

  render() {
    const {
      username,
      email,
      password,
      confirmPassword,
      nativeLang,
      learnLang,
    } = this.state;
    return (
      <div className="signup">
        <div className="signup__body" id="step1">
          {/* <BackButton
            className="back__button"
            onClick={() =>
              console.log('back button')
            }  this.props.history.push('/')
          /> */}
          <h2 className="signup__heading">Join Us Now</h2>
          <div className="signup__form">
            <form id="signup" className="signup__form" method="POST">
              <Input
                type="text"
                name="username"
                className="signup__input"
                label="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
                errMsg={() => console.log('You entered an exist username')}
              />
              <Input
                type="email"
                name="email"
                className="signup__input"
                label="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
                errMsg={() => console.log('You entered an exist email')}
              />
              <Input
                type="password"
                name="password"
                className="signup__input"
                label="passeord"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
                errMsg={() => console.log('You entered weak password')}
              />
              <Input
                type="password"
                name="confirmPassword"
                className="signup__input"
                label="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={this.handleChange}
                errMsg={() => console.log('The password is not matching')}
              />
              <Button
                text="Next"
                className="signup__button"
                onClick={this.handleSignup}
              />
            </form>
          </div>
        </div>
        {/* Step 2 to choose languages */}
        <div className="signup__body" id="step2">
          <h2 className="signup__heading">Choose Languages</h2>
          <Dropdown
            labelText="Native Language"
            name="language"
            languages={[
              { id: 1, language: 'Arabic' },
              { id: 2, language: 'English' },
              { id: 3, language: 'Spanish' },
              { id: 4, language: 'Dutch' },
            ]}
            value={nativeLang}
            onChange={({ target: { value } }) =>
              this.setState({ nativeLang: value })
            }
          />
          <Dropdown
            labelText="Learning Language"
            name="language"
            languages={[
              { id: 1, language: 'Arabic' },
              { id: 2, language: 'English' },
              { id: 3, language: 'Spanish' },
              { id: 4, language: 'Dutch' },
            ]}
            value={learnLang}
            onChange={this.handleChange}
          />
          <Button
            text="Next"
            className="signup__button"
            onClick={this.handleSignup}
          />
        </div>
        {/* Step 3 to choose interests */}
        <div className="signup__body" id="step3">
          <h2 className="signup__heading">Choose Interests</h2>
          <Checkbox id={1} value="Music" onClick={this.handleChange} />
          <Checkbox id={2} value="Sport" onClick={this.handleChange} />
          <Button
            text="Sign Up"
            className="signup__button"
            onClick={this.handleSignup}
          />
        </div>
      </div>
    );
  }
}
