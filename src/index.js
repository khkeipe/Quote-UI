import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from '../src/App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);