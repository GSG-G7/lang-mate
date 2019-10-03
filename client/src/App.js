import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import Chat from './components/pages/Chat';
import Settings from './components/pages/Settings';
import auth from './components/Auth/auth';
import PageNotFound from './components/common/pageNotFound';
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
    const { isLogged, userInfo } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          {auth.isAuthenticated ? (
            <Route
              exact
              path="/"
              render={props => <Home userInfo={userInfo} {...props} />}
            />
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
            exact
            path="/sign-up"
            setUserInfo={this.setUserInfo}
            render={props => (
              <Signup {...props} setUserInfo={this.setUserInfo} />
            )}
          />

          <PrivateRoute path="/profile/:username" component={Profile} />
          <PrivateRoute path="/settings" component={Settings} />
          <PrivateRoute
            exact
            path="/channel/:user/:id"
            userInfo={userInfo}
            component={Chat}
          />
          <Route path="/logout" />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
