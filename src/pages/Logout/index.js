import React, { Component } from 'react';

export default class extends Component {
  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return null;
  }
}
