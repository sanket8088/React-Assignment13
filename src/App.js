import React from 'react';
import './App.css';
import Main from './MainContainer/main';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>The Video Player</h1>
          <Route path="/" component={Main} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
