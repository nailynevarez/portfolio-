import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import '/client/main.css';


export default class Web extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <ErrorBoundary>
      <div>
      <p>This is the award page!</p>
      </div>
      </ErrorBoundary>
    );
  }
}
