import React, { Component } from 'react';
// import { BrowserHistory } from 'react-router-dom';
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
                onChange={({ target: { value } }) =>
                  this.setState({ username: value })
                }
                errMsg={() => console.log('You entered an exist username')}
              />
              <Input
                type="email"
                name="email"
                className="signup__input"
                label="email"
                placeholder="Email"
                value={email}
                onChange={({ target: { value } }) => {
                  this.setState({ email: value });
                }}
                errMsg={() => console.log('You entered an exist email')}
              />
              <Input
                type="password"
                name="password"
                className="signup__input"
                label="passeord"
                placeholder="Password"
                value={password}
                onChange={({ target: { value } }) => {
                  this.setState({ password: value });
                }}
                errMsg={() => console.log('You entered weak password')}
              />
              <Input
                type="password"
                name="confirmPassword"
                className="signup__input"
                label="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={({ target: { value } }) => {
                  this.setState({ confirmPassword: value });
                }}
                errMsg={() => console.log('The password is not matching')}
              />
              <Button
                text="Next"
                className="signup__button"
                onClick={this.handleChange}
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
            onChange={({ target: { value } }) =>
              this.setState({ learnLang: value })
            }
          />
          <Button
            text="Next"
            className="signup__button"
            onClick={this.handleChange}
          />
        </div>
        {/* Step 3 to choose interests */}
        <div className="signup__body" id="step3">
          <h2 className="signup__heading">Choose Interests</h2>
          <Checkbox id={1} value="Music" onClick={() => this.setState({})} />
          <Checkbox id={2} value="Sport" onClick={() => this.setState({})} />
          <Button
            text="Sign Up"
            className="signup__button"
            onClick={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
