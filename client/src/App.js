import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApiService from './services/api';
import './App.css';

import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import Chat from './components/pages/Chat';
import Settings from './components/pages/Settings';

class App extends React.Component {
  state = {
    text: '',
  };

  componentDidMount() {
    ApiService.fetchData().then(result => this.setState({ text: result.body }));
  }

  render() {
    const { text } = this.state;
    return (
      <BrowserRouter>
        <div>
          <h1>{text}</h1>
        </div>
        <Switch>
          <Route exact path="/" component={Landing} />
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
