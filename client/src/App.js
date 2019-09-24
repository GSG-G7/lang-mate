import React from 'react';
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
      <div>
        <h1>{text}</h1>
      </div>
    );
  }
}

export default App;
