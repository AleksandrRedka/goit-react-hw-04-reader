import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './components/App/App';

ReactDOM.render(
  <div>
    <HashRouter basename='/'>
      <Route component={App} />
    </HashRouter>
  </div>,
  document.getElementById('root'),
);
