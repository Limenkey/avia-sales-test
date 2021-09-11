/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';
import requestTickets from './polling';
import './index.css';
import App from './Components/App';


store.dispatch(requestTickets)


const update = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

update()
store.subscribe(update)