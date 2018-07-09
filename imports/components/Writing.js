import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import '/client/main.css';


export default class Writing extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <ErrorBoundary>
      <div>
      <p>This is the resume page!</p>
      </div>
      </ErrorBoundary>
    );
  }
}
