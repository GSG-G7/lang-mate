import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ApiService from './services/api';
import Signup from './components/pages/Signup';
import './App.css';

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
          <Route exact path="/sign-up" component={Signup} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
