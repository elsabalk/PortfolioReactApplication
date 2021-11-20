import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
          <ul className="maker"><a>Designed by Elsa Balkaran</a></ul>
          </ul>
        </div>
      </div>
    </footer>
    );
  }
}