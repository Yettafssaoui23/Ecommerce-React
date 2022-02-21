import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// This provider is a component that we want to wrap around the entire application
import { Provider } from 'react-redux';

import store from './redux/store';

import './index.css';
import App from './App';

/**
 * Provider : 
 * this provider is a component that is the parent of everything inside of our application.
 * And as the parent, 
 * it allows us to get access to all of the things related to the store 
 * that we're going to put all of the actual code we want to store on our redux state.
 */

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

