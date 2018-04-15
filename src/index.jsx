import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* eslint-disable no-undef */
document.title = '埃尔丁图书馆';

ReactDOM.render(
  <App />,
  document.getElementById('content'),
);

if (module.hot) {
  module.hot.accept();
}
