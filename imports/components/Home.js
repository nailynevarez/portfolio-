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
          <p> &#8212; I&#39;m a designer, illustrator, and web developer using her creative skills for greater social change.</p>
        </div>
        <div className = 'image-row1'>
          <Link to = "/work/work1"><img src = '/images/muxeres.png' title = "Graphic Design"  onClick = {this.displayWork.bind(this, 'work1')} /></Link>
          <Link to = "/work/work2"><img src = '/images/yaninart.png' title = "Fine Art" onClick = {this.displayWork.bind(this, 'work2')}/></Link>
        </div>
        <div className = 'image-row2'>
          <Link to = "/work/work3"><img src = '/images/raza.png' title = "Web Dev" onClick = {this.displayWork.bind(this, 'work3')}/></Link>
        </div>
        <div className = 'image-row3'>
          <Link to = "/work/work4"><img src = '/images/orkids.png' title = "Writing Samples"  onClick = {this.displayWork.bind(this, 'work4')}/></Link>
          <Link to = "/work/work5"><img src = '/images/coco.png' title = "Volunteer Work" onClick = {this.displayWork.bind(this, 'work5')}/></Link>
        </div>
        <div className = 'image-row4'>
          <Link to = "/work/work6"><img src = '/images/majesty.png' title = "Awards & Honors" onClick = {this.displayWork.bind(this, 'work6')}/></Link>
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
