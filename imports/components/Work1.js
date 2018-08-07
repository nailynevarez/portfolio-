import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js'
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
      {this.state.showWork1 ?
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
      : null}

      {this.state.showWork1 ?
      <div className= "Work1Img">
      <img src = '/images/muxeres.png' className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}/>
      </div>
      : null}

      {this.state.showWork1 ?
      <div className= "Work1links">
      <a className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}>Emerging Leaders Project</a>
      <a className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'} onClick = {this.displayWork2.bind(this)} >YaninArt</a>
      <a className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}>Majesty</a>
      <a className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}>ORKids</a>
      <a className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}>MEChA</a>
      <a className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}>Other Project</a>
      </div>
      : null}
      </ErrorBoundary>
    );
  }
}
