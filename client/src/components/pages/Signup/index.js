/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import api from '../../../services/api';
import signupValidation from '../utils/signupValidation';
import BackButton from '../../common/BackButton';
import Input from '../../common/Input';
import Button from '../../common/Button';
import Dropdown from '../../common/Dropdown';
import Checkbox from '../../common/Checkbox';
import './index.css';
import auth from '../../Auth/auth';

export default class signup extends Component {
  state = {
    interests: [],
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    nativeLangId: 1,
    learningLangId: 1,
    tab: 0,
    errMsg: '',
    languages: [],
  };

  componentDidMount() {
    const Allinterests = [
      { id: 1, name: 'music' },
      { id: 2, name: 'sports' },
      { id: 3, name: 'football' },
      { id: 4, name: 'reading' },
      { id: 5, name: 'novels' },
      { id: 6, name: 'games' },
      { id: 7, name: 'swimming' },
    ];

    const languagesList = [
      { id: 1, language: 'Arabic' },
      { id: 2, language: 'English' },
      { id: 3, language: 'Spanish' },
      { id: 4, language: 'Dutch' },
    ];
    this.setState({
      interests: Allinterests.map(e => ({ ...e, checked: false })),
      languages: [...languagesList],
    });
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleCheck = ({ target: { id } }) => {
    const { interests } = this.state;
    const newIntersts = interests.map(e => ({ ...e }));
    newIntersts.forEach(e => {
      if (+e.id === +id) {
        e.checked = !e.checked;
      }
      return e;
    });
    this.setState({
      interests: newIntersts,
    });
  };

  nextTab = () => {
    const { tab, username, email, password, confirmPassword } = this.state;
    if (tab === 0) {
      signupValidation
        .validate({ username, email, password, confirmPassword })
        .then(() => {
          this.setState({
            tab: tab + 1,
          });
        })
        .catch(error => {
          this.setState({ errMsg: error.errors[0] });
        });
    } else {
      this.setState({
        tab: tab + 1,
      });
    }
  };

  previousTab = () => {
    const { tab } = this.state;
    this.setState({ tab: tab - 1 });
  };

  filterInterests = array => array.filter(e => e.checked).map(e => e.id);

  handleSignup = e => {
    const {
      history: { push },
    } = this.props;

    e.preventDefault();
    const {
      username,
      email,
      password,
      nativeLangId,
      learningLangId,
      interests,
    } = this.state;
    const interestsId = this.filterInterests(interests);
    const userInfo = {
      username,
      email,
      password,
      nativeLangId,
      learningLangId,
      interestsId,
    };

    api
      .signUp(userInfo)
      .then(res => {
        if (res.isSuccess) {
          const { id: userId, username: userName } = res.data;
          const userInformation = { userId, userName };
          auth.isAuthenticated = true;
          auth.setUserInfo(userInformation);
          push('/');
        }
        if (res.message) throw Error(res.message);
      })
      .catch(err => alert(err.message));
  };

  render() {
    const {
      username,
      email,
      password,
      confirmPassword,
      nativeLangId,
      learningLangId,
      tab,
      Allinterests,
      interests,
      errMsg,
      languages,
    } = this.state;
    const {
      history: {
        location: { state },
      },
    } = this.props;
    let newPathname;
    if (state) {
      const {
        history: {
          location: {
            state: {
              from: { pathname },
            },
          },
        },
      } = this.props;
      newPathname = pathname;
    } else {
      newPathname = '/';
    }

    const { location } = this.props;
    if (auth.isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: `${newPathname}`,
            state: { from: location },
          }}
        />
      );
    }

    return (
      <div className="signup">
        {tab !== 0 ? (
          <BackButton
            className="back__button"
            back={() => this.previousTab()}
          />
        ) : (
          ''
        )}
        <div className="signup__body">
          {tab === 0 ? (
            <>
              <h2 className="signup__heading">Join Us Now</h2>
              <div className="signup__form">
                <Input
                  type="text"
                  name="username"
                  className="signup__input"
                  label="username"
                  placeholder="Username"
                  value={username.value}
                  onChange={this.handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  className="signup__input"
                  label="email"
                  placeholder="Email"
                  value={email.value}
                  onChange={this.handleChange}
                />
                <Input
                  type="password"
                  name="password"
                  className="signup__input"
                  label="passeord"
                  placeholder="Password"
                  value={password.value}
                  onChange={this.handleChange}
                />
                <Input
                  type="password"
                  name="confirmPassword"
                  className="signup__input"
                  label="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword.value}
                  onChange={this.handleChange}
                />
                <span className="error-msg">{errMsg || ''}</span>
                <Button
                  text="Next"
                  className="signup__button"
                  onClick={this.nextTab}
                />
              </div>
            </>
          ) : (
            ''
          )}
          {tab === 1 ? (
            <>
              <h2 className="signup__heading">Choose Languages</h2>
              {languages ? (
                <>
                  <Dropdown
                    labelText="Native Language"
                    name="nativeLangId"
                    languages={languages}
                    value={nativeLangId.id}
                    onChange={this.handleChange}
                  />
                  <Dropdown
                    labelText="Learning Language"
                    name="learningLangId"
                    languages={languages}
                    value={learningLangId.id}
                    onChange={this.handleChange}
                  />
                </>
              ) : (
                ''
              )}

              <Button
                text="Next"
                className="signup__button"
                onClick={this.nextTab}
              />
            </>
          ) : (
            ''
          )}
          {tab === 2 ? (
            <>
              <h2 className="signup__heading">Choose Interests</h2>
              {interests
                ? interests.map(({ id, name }, i) => (
                    <Checkbox
                      key={id}
                      id={id}
                      value={name}
                      onClick={this.handleCheck}
                      name="interests"
                      checked={() => interests[i] === Allinterests[i]}
                    />
                  ))
                : ''}
              <Button
                text="Sign Up"
                className="signup__button"
                onClick={this.handleSignup}
              />
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
