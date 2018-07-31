import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import '/stylesheets/css/app.css';


export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      showHome: true,
      showWork: false,
      activeWork: 'home',
    };
  }


    displayWork = (work) => {

      //hide home and show work in that category when clicked
      this.setState({
        showHome: !(this.state.showHome),
        showWork: !(this.state.showWork),
      });

      //determine which category was clicked
      if (work == 'graphic') {
        this.setState({
          activeWork: 'graphic',
        });
      }

      if (work == 'fine') {
        this.setState({
          activeWork: 'fine',
        });
      }

      if (work == 'web') {
        this.setState({
          activeWork: 'web',
        });
      }

      if (work == 'writing') {
        this.setState({
          activeWork: 'writing',
        });
      }

      if (work == 'volunteer') {
        this.setState({
          activeWork: 'volunteer',
        });
      }

      if (work == 'award') {
        this.setState({
          activeWork: 'award',
        });
      }
    }




  render() {
    //fade in

    //determine which category to show, directs to external components
    let work = null;
    switch (this.state.activeWork) {
      case 'graphic':
      work = <Graphic />;
      break;
      case 'fine':
      work = <Fine />;
      break;
      case 'web':
      work = <Web />;
      break;
      case 'writing':
      work = <Writing />;
      break;
      case 'volunteer':
      work = <Volunteer />;
      break;
      case 'Award':
      work = <Award />;
      break;
    }

    return (
      <ErrorBoundary>


      { this.state.showHome ?
      <div className = "home-intro">
      <p> &#8212; Hi! I&#39;m a Graphic designer, Illustrator, and Web developer who is passionate about using her creative and technical skills for greater social change.</p>
      </div>
      : null}

      { this.state.showHome ?
      <div className = "home-name-row1">
        <a id = 'graphicLink'> Graphic Design </a>
        <a id = 'fineArtLink'> Fine Art </a>
        <a id = 'webDevLink'> Web Dev </a>
      </div>
      : null}

      { this.state.showHome ?
      <div className = "home-name-row2">
        <a id = 'graphicLink'> Writing Samples </a>
        <a id = 'fineArtLink'> Volunteer Work </a>
        <a id = 'webDevLink'> Awards  </a>
      </div>
      : null}


      { this.state.showHome ?
        <div className = 'home-row1'>
        <img src = '/images/placeholder.png' title = "Graphic Design" href = 'graphic-design' onClick = {this.displayWork.bind(this, 'graphic')} />
        <img src = '/images/placeholder.png' title = "Fine Art" href = 'fine-art'onClick = {this.displayWork.bind(this, 'fine')}/>
        <img src = '/images/placeholder.png' title = "Web Dev" href = 'web-dev'onClick = {this.displayWork.bind(this, 'web')}/>
        </div>
      : null}

      { this.state.showHome ?
      <div className = 'home-row2'>
        <img src = '/images/placeholder.png' title = "Writing Samples" href = 'writing-samples' onClick = {this.displayWork.bind(this, 'writing')}/>
        <img src = '/images/placeholder.png' title = "Volunteer Work" href = 'volunteer-work' onClick = {this.displayWork.bind(this, 'volunteer')}/>
        <img src = '/images/placeholder.png' title = "Awards & Honors" href = 'awards-and-honors' onClick = {this.displayWork.bind(this, 'award')}/>
        </div>
      : null}


      {this.state.showWork && work}
      </ErrorBoundary>
    );
  }
}
