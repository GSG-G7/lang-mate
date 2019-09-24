import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ApiService from './services/api';
import './App.css';
import UserMenu from './components/common/UserMenu';

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
          {/* tried the React Router so ill keep this line for a hint on how to use it */}
          <UserMenu />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
