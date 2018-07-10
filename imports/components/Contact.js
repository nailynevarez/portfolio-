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
        <div className = "contactParagraph">
        <p className = {this.state.showContact ? 'fadeIn' : 'fadeOut'}>Feel free to connect with me through email or social media:</p>
        </div>
        : null}

      { this.state.showContact ?
        <div className = "contactIcons">
        <a href = 'https://linkedin.com' target = '_blank'>
        <img src = '/images/email.png' className = {this.state.showContact ? 'fadeIn' : 'fadeOut'}/>
        </a>
        <a href = 'https://linkedin.com' target = '_blank'>
        <img src = '/images/linkedin.png' className = {this.state.showContact ? 'fadeIn' : 'fadeOut'}/>
        </a>
        <a href = 'https://linkedin.com' target = '_blank'>
        <img src = '/images/facebook.jpg' className = {this.state.showContact ? 'fadeIn' : 'fadeOut'}/>
        </a>
        <a href = 'https://linkedin.com' target = '_blank'>
        <img src = '/images/instagram.png' className = {this.state.showContact ? 'fadeIn' : 'fadeOut'}/>
        </a>
        </div>
        : null}
      </ErrorBoundary>
    );
  }
}
