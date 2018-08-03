import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import Work1 from './Work1.js';
import Work2 from './Work2.js';
import Work3 from './Work3.js';
import Work4 from './Work4.js';
import Work5 from './Work5.js';
import Work6 from './Work6.js';
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
      if (work == 'work1') {
        this.setState({
          activeWork: 'work1',
        });
      }

      if (work == 'work2') {
        this.setState({
          activeWork: 'work2',
        });
      }

      if (work == 'work3') {
        this.setState({
          activeWork: 'work3',
        });
      }

      if (work == 'work4') {
        this.setState({
          activeWork: 'work4',
        });
      }

      if (work == 'work5') {
        this.setState({
          activeWork: 'work5',
        });
      }

      if (work == 'work6') {
        this.setState({
          activeWork: 'work6',
        });
      }

      //scroll to the top
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }




  render() {

    //determine which category to show, directs to external components
    let component = null;
    switch (this.state.activeWork) {
      case 'work1':
        component = <Work1 />;
        break;
      case 'work2':
        component = <Work2 />;
        break;
      case 'work3':
        component = <Work3 />;
        break;
      case 'work4':
        component = <Work4 />;
        break;
      case 'work5':
        component = <Work5 />;
        break;
      case 'work6':
        component = <Work6 />;
        break;
    }

    return (
      <ErrorBoundary>


      { this.state.showHome ?
      <div className = "home-intro">
      <p> &#8212; I&#39;m a Graphic designer, Illustrator, and Web developer using her creative skills for greater social change.</p>
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
        <img src = '/images/muxeres.png' title = "Graphic Design" href = 'graphic-design' onClick = {this.displayWork.bind(this, 'work1')} />
        <img src = '/images/yaninart.png' title = "Fine Art" href = 'fine-art'onClick = {this.displayWork.bind(this, 'work2')}/>
        </div>
      : null}

      { this.state.showHome ?
        <div className = 'image-row2'>
        <img src = '/images/raza.png' title = "Web Dev" href = 'web-dev'onClick = {this.displayWork.bind(this, 'work3')}/>
        </div>
      : null}

      { this.state.showHome ?
      <div className = 'image-row3'>
        <img src = '/images/orkids.png' title = "Writing Samples" href = 'writing-samples' onClick = {this.displayWork.bind(this, 'work4')}/>
        <img src = '/images/coco.png' title = "Volunteer Work" href = 'volunteer-work' onClick = {this.displayWork.bind(this, 'work5')}/>
      </div>
      : null}


      { this.state.showHome ?
      <div className = 'image-row4'>
        <img src = '/images/majesty.png' title = "Awards & Honors" href = 'awards-and-honors' onClick = {this.displayWork.bind(this, 'work6')}/>
        </div>
      : null}

      {this.state.showWork && component}
      </ErrorBoundary>
    );
  }
}
