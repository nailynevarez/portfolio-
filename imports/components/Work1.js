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

  displayWork2 = () => {

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
       and were in search of a shirt design that would embody growth and resilience. As the Graphic Designer for MEChA,
       I worked with the conference coordinators to create a design that ultimately excited the youth and united our community.
       The design was printed on over 300 shirts and was worn by attendees, volunteers, and workshop leaders at the conference.
      </p>
      <p className = {this.state.showWork1 ? 'fadeIn' : 'fadeOut'}>
        <b>My role:</b> <br/>Graphic Designer <br/><br/>
        <b>Conference Coordinators:</b> <br/><a>Yomaira Tarula </a> Veronica Alvaro & Ana Osorio
      </p>
      </div>
      <div className= "Work1Img">
      <img src = '/images/razaunida1.jpg' className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}/>
      </div>

      {this.state.showWork1 ?
      <div className= "Work1links">
      <Link to = '/work/work1'>Raza Unida Conference</Link>
      <Link to = '/work/work2'>Majesty</Link>
      <Link to = '/work/work3'>Women for Women</Link>
      <Link to = '/work/work4'>OR Kids</Link>
      <Link to = '/work/work5'>Dear Future Community</Link>
      <Link to = '/work/work6'>Yanin Art</Link>
      </div>
      : null}
      </ErrorBoundary>
    );
  }
}
