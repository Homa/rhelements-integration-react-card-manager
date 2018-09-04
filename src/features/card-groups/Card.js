import React, { Component } from 'react';
import '../../rhelements/rh-card.js';
import '../../rhelements/rh-button.js';

export default class Card extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="card-wrapper">
        <rh-card theme="light">
          <h2 slot="header">{this.props.title}</h2>
          <div>{this.props.desc}</div>
          <div slot="footer"><rh-button>Remove</rh-button> <a target="_blank" href={this.props.url}>Link</a></div>
        </rh-card>
      </div>
    );
  }
}
