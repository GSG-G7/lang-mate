import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ApiService from './services/api';
import './App.css';
import Login from './components/pages/Login';

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
        <Route exact path="/login" component={Login} />
      </BrowserRouter>
    );
  }
}

export default App;
