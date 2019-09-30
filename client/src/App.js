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
import UnderConstruction from './components/pages/UnderConstruction';

class App extends React.Component {
  state = {
    text: '',
  };

  componentDidMount() {
    // ApiService.fetchData().then(result => this.setState({ text: result.body }));
  }

  render() {
    const { text } = this.state;
    return (
      <BrowserRouter>
        <div>
          <h1>{text}</h1>
        </div>
        <Switch>
          <Route exact path="/" component={UnderConstruction} />
          <Route path="/login" component={UnderConstruction} />
          <Route path="/sign-up" component={UnderConstruction} />
          <Route path="/profile/:username" component={UnderConstruction} />
          <Route path="/settings" component={UnderConstruction} />
          <Route path="/channel/:username" component={UnderConstruction} />
          <Route path="/logout" />
          <Route component={() => <h1>Error 404</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
