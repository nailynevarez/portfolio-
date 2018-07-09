import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import '/client/main.css';


export default class Graphic extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <ErrorBoundary>
      <div className = "graphicTest">
      <p>This is the graphic page!</p>
      </div>
      </ErrorBoundary>
    );
  }
}
