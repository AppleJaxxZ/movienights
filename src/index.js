import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import store from './Redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
