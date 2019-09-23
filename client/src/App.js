import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    text: '',
  };

  componentDidMount() {
    fetch('/api/v1/')
      .then(res => res.json())
      .then(result => this.setState({ text: result.body }));
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
