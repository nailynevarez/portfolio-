import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js'
import '/stylesheets/css/app.css';


export default class Work3 extends Component {
  constructor(props){
    super(props);
    this.state = {
      showWork3: true,
    };
  }



  render() {
    return (
      <ErrorBoundary>


      {this.state.showWork3 ?
      <div className= "WorkParagraphs">
      <p id = "firstP" className = {this.state.showWork3 ? 'fadeIn' : 'fadeOut'}>This is work 3</p>

      </div>
      : null}

      </ErrorBoundary>
    );
  }
}
