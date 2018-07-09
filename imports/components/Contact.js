import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import '/client/main.css';


export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      showContact: true,
    };
  }



  render() {
    return (
      <ErrorBoundary>
      { this.state.showContact ?
        <div className = "contactImage">
        <a href = 'https://linkedin.com' target = '_blank'>
        <img src = '/images/linkedin.png' width = '25' height = '25' className = {this.state.showContact ? 'fadeIn' : 'fadeOut'}/>
        </a>
        </div>
        : null}

      { this.state.showContact ?
        <div className = "contactParagraph">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
        : null}
      </ErrorBoundary>
    );
  }
}
