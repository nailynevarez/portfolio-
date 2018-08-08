import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import '/stylesheets/css/app.css';


export default class Work2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      showWork2: true,
    };
  }



  render() {
    return (
      <ErrorBoundary>
      <div className= "Work2Text">
      <h1>UO Muxeres</h1>
      <h3>LOGO DESIGN</h3>
      <p className = {this.state.showWork2 ? 'fadeIn' : 'fadeOut'}>
      Nominavi incorrupte te quo, id mei adipisci antiopam. Saepe iudico
      commodo ut usu, et impetus expetenda referrentur sed, te soluta prompta
      impedit sit. Justo eripuit interesset eos ad, pri cu assueverit concludaturque.
      Erroribus laboramus nec no, no qui nihil graece percipitur.
      </p>
      <p className = {this.state.showWork2 ? 'fadeIn' : 'fadeOut'}>
        Some more text, maybe a link to something or what my role was in a team.
      </p>
      </div>
      <div className= "Work2Img">
      <img src = '/images/muxeres.png' className = {this.state.showWork2 ? 'fadeIn' : 'fadeOut'}/>
      </div>

      <div className= "Work2links">
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
