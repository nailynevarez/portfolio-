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
      <div className= "p1">
      <p>This is paragraph 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      : null}

      {this.state.showAbout ?
      <div className= "p2">
      <p>This is paragraph 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      : null}

      {this.state.showAbout ?
      <div className= "p3">
      <p> This is paragraph 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      : null}

      {this.state.showAbout ?
      <div className= "p4">
      <p> This is paragraph 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      : null}

      { this.state.showAbout ?
        <div className = 'aboutImg1'>
        <img src = '/images/placeholder.png' title = "Graphic Design" href = 'graphic-design' />
        </div>
      : null}


      </ErrorBoundary>
    );
  }
}
