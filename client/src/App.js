import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import Chat from './components/pages/Chat';
import Settings from './components/pages/Settings';
import auth from './components/Auth/auth';
import PrivateRoute from './components/Auth/PrivateRoute';

import './App.css';

class App extends React.Component {
  state = {
    isLogged: null,
    userInfo: null,
  };

  componentDidMount() {
    auth.authenticate(() => {
      if (auth.isAuthenticated) {
        const userInfo = auth.getUserInfo();
        this.setState({ userInfo, isLogged: auth.isAuthenticated });
      } else {
        this.setState({ isLogged: auth.isAuthenticated });
      }
    });
  }

  isLoggedOut = () => {
    auth.logout();
    this.setState({ isLogged: false });
  };

  setUserInfo = (_userInfo, _islogged) => {
    const userInfo = auth.getUserInfo() || _userInfo;
    this.setState({ userInfo, isLogged: auth.isAuthenticated });
  };

  render() {
    const { isLogged } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          {auth.isAuthenticated ? (
            <Route exact path="/" component={Home} />
          ) : (
            <Route exact path="/" component={Landing} />
          )}

          <Route
            exact
            path="/login"
            setUserInfo={this.setUserInfo}
            render={props => (
              <Login {...props} setUserInfo={this.setUserInfo} />
            )}
          />
          <Route
            path="/sign-up"
            component={isLogged ? () => <Redirect to="/" /> : Signup}
          />

          <PrivateRoute path="/profile/:username" component={Profile} />
          <PrivateRoute path="/settings" component={Settings} />
          <PrivateRoute path="/channel/:username" component={Chat} />
          <Route path="/logout" />
          <Route component={() => <h1>Error 404</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
