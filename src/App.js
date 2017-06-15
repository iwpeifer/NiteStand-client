import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Main from './components/main'

class App extends Component {
  render() {
    return (
      <div className="main-page">
        <Route path="/main" component={Main} />
      </div>
    );
  }
}

export default App;
