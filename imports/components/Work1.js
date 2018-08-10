import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import '/stylesheets/css/app.css';


export default class Work1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      showWork1: true,
    };
  }


  render() {
    return (
      <ErrorBoundary>
      <div className= "Work1Text">
      <h1>Raza Unida Conference</h1>
      <h3>T-SHIRT DESIGN</h3>
      <p className = {this.state.showWork1 ? 'fadeIn' : 'fadeOut'}>
      The Raza Unida Youth Conference is an annual conference held at the University of
      Oregon by the student organization MEChA. This conference invites high school students
      of latino heritage from all across Oregon to the UO campus to encourage, inspire and empower them to pursue
      a higher education.
      <br/>
      <br/>
      The coordinators of the 14th annual conference had established the theme “Floreciendo Juntos” (Flourishing Together),
       and were in search of a shirt design that would embody growth and resilience.
      </p>
      <p className = {this.state.showWork1 ? 'fadeIn' : 'fadeOut'}>
        <b>My role:</b> <br/>Graphic Designer <br/><br/>
        <b>Conference Coordinators:</b> <br/>Yomaira Tarula, Veronica Alvaro & Ana Osorio
      </p>
      </div>
      <div className= "Work1Img1-Desktop">
      <img src = '/images/razaunida1-desktop.png' className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}/>
      </div>
      <div className= "Work1Img1-Mobile">
      <img src = '/images/razaunida1-mobile.png' className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}/>
      </div>
      <div className= "Work1Img2-Desktop">
      <img src = '/images/razaunida2-desktop.png' className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}/>
      </div>
      <div className= "Work1Img2-Mobile">
      <img src = '/images/razaunida2-mobile.png' className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}/>
      </div>
      <p className ="boldP">I collaborated with conference coordinators to create a design that ultimately <span>excited</span> the youth and <span>united</span> our community.</p>
      <p className ="boldP"> The design was printed on over <span>300</span> shirts and was worn by attendees, volunteers, and workshop leaders at the conference.</p>

      <div className= "Work1links">
      <Link to = '/work/work1'>Raza Unida Conference</Link>
      <Link to = '/work/work2'>Majesty</Link>
      <Link to = '/work/work3'>Women for Women</Link>
      <Link to = '/work/work4'>OR Kids</Link>
      <Link to = '/work/work5'>Dear Future Community</Link>
      <Link to = '/work/work6'>Yanin Art</Link>
      </div>

      </ErrorBoundary>
    );
  }
}
