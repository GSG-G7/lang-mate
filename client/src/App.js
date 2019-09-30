import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
    // ApiService.fetchData().then(result => this.setState({ text: result.body }));
  }

  render() {
    const { isLogged } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={isLogged ? Home : Landing} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/profile/:username" component={Profile} />
          <Route path="/settings" component={Settings} />
          <Route path="/channel/:username" component={Chat} />
          <Route path="/logout" />
          <Route component={() => <h1>Error 404</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
