import React from 'react';
import 'normalize.css';
import './scss/mian.scss';

import Lines from './component/Lines/lines';
import Sidebar from './component/Sidebar/sidebar';
import Container from './component/Container/Container';

const App = () => (
  <div className="page">
    <Lines />
    <Sidebar />
    <Container />
  </div>
);

export default App;
