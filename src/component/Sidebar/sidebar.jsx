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
            { /* eslint-disable global-require, max-len */}
            <img className="c-sidebar-logo-mobile" src="data:image/png;base64,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" alt="1" />
            {/* eslint-enable global-require, max-len */}
          </a>
        </figure>
        <nav className="c-sidebar-menu">
          <a href="/" className="c-sidebar-labelmobile">
              Menu
            <span className="c-sidebarmenubar" />
          </a>
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
