import React, { Component } from 'react';
import './style.scss';

class Lines extends Component {
  constructor(...argm) {
    super(...argm);

    this.class_name = 'o-lines_background';
  }

  render() {
    return (
      <div className="o-lines_background">
        <span className="o-lines-background_line" />
        <span className="o-lines-background_line" />
        <span className="o-lines-background_line" />
        <span className="o-lines-background_line" />
        <span className="o-lines-background_line" />
        <span className="o-lines-background_line" />
        <span className="o-lines-background_line" />
        <span className="o-lines-background_line" />
        <span className="o-lines-background_line" />
      </div>
    );
  }
}

export default Lines;
