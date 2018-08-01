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

    }

    return (
      <ErrorBoundary>


      { this.state.showHome ?
      <div className = "home-intro">
      <p> &#8212; I&#39;m a Graphic designer, Illustrator, and Web developer using her creative and technical skills for greater social change.</p>
      </div>
      : null}

      { this.state.showHome ?
      <div className = "name-row1">
        <a id = 'graphicLink'> Graphic Design </a>
        <a id = 'fineArtLink'> Fine Art </a>
      </div>
      : null}

      { this.state.showHome ?
      <div className = "name-row2">
        <a id = 'webDevLink'> Web Dev </a>
      </div>
      : null}

      { this.state.showHome ?
      <div className = "name-row3">
        <a id = 'graphicLink'> Writing Samples </a>
        <a id = 'fineArtLink'> Volunteer Work </a>
      </div>
      : null}

      { this.state.showHome ?
      <div className = "name-row4">
        <a id = 'webDevLink'> Web Dev </a>
      </div>
      : null}


      { this.state.showHome ?
        <div className = 'image-row1'>
        <img src = '/images/muxeres.png' title = "Graphic Design" href = 'graphic-design' onClick = {this.displayWork.bind(this, 'graphic')} />
        <img src = '/images/yaninart.png' title = "Fine Art" href = 'fine-art'onClick = {this.displayWork.bind(this, 'fine')}/>
        </div>
      : null}

      { this.state.showHome ?
        <div className = 'image-row2'>
        <img src = '/images/raza.png' title = "Web Dev" href = 'web-dev'onClick = {this.displayWork.bind(this, 'web')}/>
        </div>
      : null}

      { this.state.showHome ?
      <div className = 'image-row3'>
        <img src = '/images/orkids.png' title = "Writing Samples" href = 'writing-samples' onClick = {this.displayWork.bind(this, 'writing')}/>
        <img src = '/images/coco.png' title = "Volunteer Work" href = 'volunteer-work' onClick = {this.displayWork.bind(this, 'volunteer')}/>
      </div>
      : null}


      { this.state.showHome ?
      <div className = 'image-row4'>
        <img src = '/images/majesty.png' title = "Awards & Honors" href = 'awards-and-honors' onClick = {this.displayWork.bind(this, 'award')}/>
        </div>
      : null}


      {this.state.showWork && work}
      </ErrorBoundary>
    );
  }
}
