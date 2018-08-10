import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import '/stylesheets/css/app.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";



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

      //scroll to the top
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }




  render() {
    return (
      <ErrorBoundary>
        <div className = "home-intro">
          <p> &#8212; I&#39;m a designer, illustrator, and web developer using her creative skills for social change.</p>
        </div>
        <div className = 'image-row1'>
          <Link to = "/work/work1">
            <img src = '/images/rose.png'  onClick = {this.displayWork.bind(this, 'work1')} />
            <p>Raza Unida Conference</p>
          </Link>
          <Link to = "/work/work2">
            <img src = '/images/fist.png' onClick = {this.displayWork.bind(this, 'work2')}/>
            <p>Majesty</p>
          </Link>
        </div>
        <div className = 'image-row2-mobile'>
          <Link to = "/work/work3">
            <img src = '/images/world.png'  onClick = {this.displayWork.bind(this, 'work3')}/>
            <p>Women for Women</p>
          </Link>
        </div>
        <div className = 'image-row2-desktop'>
          <Link to = "/work/work3">
            <img src = '/images/world2.png' onClick = {this.displayWork.bind(this, 'work3')}/>
            <p>Women for Women</p>
          </Link>
        </div>
        <div className = 'image-row3'>
          <Link to = "/work/work4">
            <img src = '/images/oregon.png' onClick = {this.displayWork.bind(this, 'work5')}/>
            <p>OR Kids</p>
          </Link>
          <Link to = "/work/work5">
            <img src = '/images/bottle.png' onClick = {this.displayWork.bind(this, 'work4')}/>
            <p>Dear Future Community Grant</p>
          </Link>
        </div>
        <div className = 'image-row4-mobile'>
          <Link to = "/work/work6">
            <img src = '/images/paint.png' onClick = {this.displayWork.bind(this, 'work6')}/>
            <p>Yanin Art</p>
          </Link>
        </div>
        <div className = 'image-row4-desktop'>
          <Link to = "/work/work6">
            <img src = '/images/paint2.png' onClick = {this.displayWork.bind(this, 'work6')}/>
            <p>Yanin Art</p>
          </Link>
        </div>
      </ErrorBoundary>
    );
  }
}



// { this.state.showHome ?
// <div className = "name-row1">
//   <a id = 'graphicLink'> Graphic Design </a>
//   <a id = 'fineArtLink'> Fine Art </a>
// </div>
// : null}
//
// { this.state.showHome ?
// <div className = "name-row2">
//   <a id = 'webDevLink'> Web Dev </a>
// </div>
// : null}
//
// { this.state.showHome ?
// <div className = "name-row3">
//   <a id = 'graphicLink'> Writing Samples </a>
//   <a id = 'fineArtLink'> Volunteer Work </a>
// </div>
// : null}
//
// { this.state.showHome ?
// <div className = "name-row4">
//   <a id = 'webDevLink'> Web Dev </a>
// </div>
// : null}
