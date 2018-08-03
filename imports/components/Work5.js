import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js'
import '/stylesheets/css/app.css';


export default class Work5 extends Component {
  constructor(props){
    super(props);
    this.state = {
      showWork5: true,
    };
  }



  render() {
    return (
      <ErrorBoundary>


      {this.state.showWork5 ?
      <div className= "WorkParagraphs">
      <p id = "firstP" className = {this.state.showWork5 ? 'fadeIn' : 'fadeOut'}>This is work 5</p>

      </div>
      : null}

      </ErrorBoundary>
    );
  }
}
