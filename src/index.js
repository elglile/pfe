import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Redd from './Redux/reducer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';

const store =  legacy_createStore(Redd)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
