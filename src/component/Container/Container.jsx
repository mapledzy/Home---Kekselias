import React, { Component } from 'react';
import './style.scss';

class Container extends Component {
  constructor(...args) {
    super(...args);

    this.a = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus facilis quisquam quae, et quam nostrum amet quis, saepe provident quas exercitationem ducimus, necessitatibus cumque illum reiciendis porro animi numquam quod!';
  }

  render() {
    return (
      <div className="content">
        {this.a}
      </div>
    );
  }
}

export default Container;
