import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import history from './history'

import Main from './components/main'

ReactDOM.render(
  <Router>
    <Main history={history}/>
  </Router>,
  document.getElementById('root'));
// registerServiceWorker();
