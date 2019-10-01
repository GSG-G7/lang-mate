import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import api from './services/api';

import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import Chat from './components/pages/Chat';
import Settings from './components/pages/Settings';

import './App.css';

class App extends React.Component {
  state = {
    isLogged: false,
  };

  componentDidMount() {
    const { isAuth } = api;
    isAuth().then(res => {
      if (res.data) this.setState({ isLogged: res.isAuth });
    });
  }

  render() {
    const { isLogged } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} />}
            component={isLogged ? Home : Landing}
          />
          <Route
            path="/login"
            component={isLogged ? () => <Redirect to="/" /> : Login}
          />
          <Route
            path="/sign-up"
            component={isLogged ? () => <Redirect to="/" /> : Signup}
          />

          <Route
            path="/profile/:username"
            component={isLogged ? Profile : Landing}
          />
          <Route path="/settings" component={isLogged ? Settings : Landing} />
          <Route
            path="/channel/:username"
            component={isLogged ? Chat : Landing}
          />
          <Route path="/logout" />
          <Route component={() => <h1>Error 404</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
