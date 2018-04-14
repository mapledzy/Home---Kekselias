import React, { Component } from 'react';
import logo from '../../img/logo.svg';

import './style.scss';

class Sidebar extends Component {
  constructor(...args) {
    super(...args);

    this.a = '1';
  }

  render() {
    return (
      <section className="c-sidebar u-fadeInleftBig" data-widget="menu" data-wow-delay="0.3s">
        <figure className="c-sidebar-logo">
          <a href="https://github.com/mapledzy/Home---Kekselias" data-route="hemo" >
            { /* eslint-disable global-require */}
            <img src={logo} alt="" />
            {/* eslint-enable global-require */}
          </a>
        </figure>
        <nav>1</nav>
        <a href="www.baidu.com">1</a>
      </section>
    );
  }
}

export default Sidebar;
