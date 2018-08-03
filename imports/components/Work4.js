import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js'
import '/stylesheets/css/app.css';


export default class Work4 extends Component {
  constructor(props){
    super(props);
    this.state = {
      showWork4: true,
    };
  }



  render() {
    return (
      <ErrorBoundary>


      {this.state.showWork4 ?
      <div className= "WorkParagraphs">
      <p id = "firstP" className = {this.state.showWork4 ? 'fadeIn' : 'fadeOut'}>This is work 4</p>

      </div>
      : null}

      </ErrorBoundary>
    );
  }
}
