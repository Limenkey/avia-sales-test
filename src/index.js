/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './Components/App';
import requestTickets from './polling';


store.dispatch(requestTickets)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);