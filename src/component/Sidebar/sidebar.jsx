import React, { Component } from 'react';
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
            {/* <img src={require('../../img/logo.jpg')} alt="" /> */}
            {/* eslint-enable global-require */}
          </a>
        </figure>
        <nav className="c-sidebar-menu">
          <ul className="c-sidebar-submenu">
            <li className="c-sidebar-sublink c-sidebar-menu-item active"><a href="https://github.com">All articles</a></li>
            <li className="c-sidebar-sublink c-sidebar-menu-item"><a href="https://github.com">Capital Markets</a></li>
            <li className="c-sidebar-sublink c-sidebar-menu-item"><a href="https://github.com">Central Banks</a></li>
            <li className="c-sidebar-sublink c-sidebar-menu-item"><a href="https://github.com">Economics</a></li>
            <li className="c-sidebar-sublink c-sidebar-menu-item"><a href="https://github.com">Financial Models</a></li>
            <li className="c-sidebar-sublink c-sidebar-menu-item"><a href="https://github.com">Other</a></li>
          </ul>

          <ul className="c-sidebar-submenu">
            <li className="c-sidebar-link">
              <a href="https://github.com/">Services</a>
            </li>
            <li className="c-sidebar-link">
              <a href="https://github.com/">About us</a>
            </li>
            <li className="c-sidebar-link">
              <a href="https://github.com/">Contact</a>
            </li>
          </ul>
        </nav>
        <a className="c-sidebar-button" href="www.baidu.com">Contact us</a>
      </section>
    );
  }
}

export default Sidebar;
