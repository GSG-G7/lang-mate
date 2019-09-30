import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Login';

class App extends React.Component {
  state = {
    text: '',
  };

  componentDidMount() {}

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
