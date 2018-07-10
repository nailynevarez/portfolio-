import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js'
import '/client/main.css';


export default class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      showAbout: true,
    };
  }



  render() {
    return (
      <ErrorBoundary>

      {this.state.showAbout ?
      <div className= "aboutParagraph">
      <p id = "firstP" className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}>I&#39;m a Graphic designer, Illustrator, and Web developer who is passionate about using her creative and technical skills for greater social change.</p>

      <p className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

      <p className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <p className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
      : null}

      { this.state.showAbout ?
        <div className = 'aboutImg1'>
        <img src = '/images/placeholder.png' title = "Graphic Design" href = 'graphic-design' className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}/>
        </div>
      : null}


      </ErrorBoundary>
    );
  }
}
