/*eslint-disable*/
// React styleguide keeps the extension .js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import { startingState, actionReducer } from './reducers/actionReducer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(actionReducer, startingState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
