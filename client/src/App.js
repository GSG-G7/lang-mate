import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/pages/Landing';
import ApiService from './services/api';
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
        </div>
        <Route exact path="/" component={LandingPage} />
      </BrowserRouter>
    );
  }
}

export default App;
