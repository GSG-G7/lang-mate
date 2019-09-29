import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fetchData } from './services/api';
import './App.css';

class App extends React.Component {
  state = {
    text: '',
  };

  componentDidMount() {
    fetchData().then(result => this.setState({ text: result.body }));
  }

  render() {
    const { text } = this.state;
    return (
      <BrowserRouter>
        <div>
          <h1>{text}</h1>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
