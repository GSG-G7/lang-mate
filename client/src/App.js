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
    isLogged: false,
  };

  componentDidMount() {
    // ApiService.fetchData().then(result => this.setState({ text: result.body }));
  }

  render() {
    const { isLogged } = this.state;
    const userInfo = {
      id: 1,
      username: 'amoodaa',
      email: 'amoodaa@gmail.com',
      isactive: true,
      bio: 'HI I LOVE PPl',
      avatar_path:
        'https://d2ln1xbi067hum.cloudfront.net/assets/default_user-951af10295a22e5f7fa2fa6165613c14.png',
      interests: [
        {
          id: 1,
          name: 'music',
        },
        {
          id: 2,
          name: 'sports',
        },
      ],
      learningLang: {
        id: 6,
        name: 'japanese',
      },
      nativeLang: {
        id: 1,
        name: 'arabic',
      },
    };
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
