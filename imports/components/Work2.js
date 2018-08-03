import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js'
import '/stylesheets/css/app.css';


export default class Work2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      showWork2: true,
    };
  }



  render() {
    return (
      <ErrorBoundary>


      {this.state.showWork2 ?
      <div className= "WorkParagraphs">
      <p id = "firstP" className = {this.state.showWork2 ? 'fadeIn' : 'fadeOut'}>This is work 2</p>

      </div>
      : null}

      </ErrorBoundary>
    );
  }
}
