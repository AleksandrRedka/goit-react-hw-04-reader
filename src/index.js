import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App/App';

ReactDOM.render(
  <div>
    <BrowserRouter basename='/'>
      <Route component={App} />
    </BrowserRouter>
  </div>,
  document.getElementById('root'),
);
