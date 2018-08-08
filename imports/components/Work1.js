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
      <h1>UO Muxeres</h1>
      <h3>LOGO DESIGN</h3>
      <p className = {this.state.showWork1 ? 'fadeIn' : 'fadeOut'}>
      Nominavi incorrupte te quo, id mei adipisci antiopam. Saepe iudico
      commodo ut usu, et impetus expetenda referrentur sed, te soluta prompta
      impedit sit. Justo eripuit interesset eos ad, pri cu assueverit concludaturque.
      Erroribus laboramus nec no, no qui nihil graece percipitur.
      </p>
      <p className = {this.state.showWork1 ? 'fadeIn' : 'fadeOut'}>
        Some more text, maybe a link to something or what my role was in a team.
      </p>
      </div>
      <div className= "Work1Img">
      <img src = '/images/muxeres.png' className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}/>
      </div>

      {this.state.showWork1 ?
      <div className= "Work1links">
      <Link to = '/work/work1'>Work 1</Link>
      <Link to = '/work/work2'>Work 2</Link>
      <Link to = '/work/work3'>Work 3</Link>
      <Link to = '/work/work4'>Work 4</Link>
      <Link to = '/work/work5'>Work 5</Link>
      <Link to = '/work/work6'>Work 5</Link>
      </div>
      : null}
      </ErrorBoundary>
    );
  }
}
