import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './scss/mian.scss';
import App from './App';

/* eslint-disable no-undef */
document.title = '(๑′ᴗ‵๑)Ｉ Lᵒᵛᵉᵧₒᵤ❤';

ReactDOM.render(
  <App />,
  document.getElementById('oreki'),
);

if (module.hot) {
  module.hot.accept();
}
