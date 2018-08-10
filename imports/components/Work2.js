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
      <h1>Majesty</h1>
      <h3>ART DIRECTION</h3>
      <p className = {this.state.showWork2 ? 'fadeIn' : 'fadeOut'}>
      <a href = "https://majestydigital.org" target="_blank">Majesty Digital</a> is a digital platform for women of color to share their lived experiences. Through
      digital media, we celebrate our differences and share commonality between them.
      </p>
      <p className = {this.state.showWork2 ? 'fadeIn' : 'fadeOut'}>
        <b>My role:</b> <br/>
        Art Director <br/>
      </p>
      <p className = {this.state.showWork2 ? 'fadeIn' : 'fadeOut'}>
      <b>Team:</b> <br/>
      Srushti Kumat <span>(Co-founder)</span> <br/>
      Yasi Milani <span>(Co-founder)</span> <br/>
      Cassidy Kusumoto <span>(Videographer)</span> <br/>
      Hanaa Mohammed <span>(Story & Partnership Outreach Liason)</span> <br/>
      Robyn Wright <span>(Copy Editor)</span> <br/>
      Milana Orth <span>(Media Planner & Writer)</span><br/>
      Neeka Safdari <span>(Grant Writer)</span><br/>
      Nana Nguyen <span>(Marketing Director)</span>
      </p>
      </div>
      <div className= "Work2ImgsLogo">
        <img src = '/images/majesty2.png' className = {this.state.showWork2  ? 'fadeIn' : 'fadeOut'}/>
        <img src = '/images/majesty1.png' className = {this.state.showWork2  ? 'fadeIn' : 'fadeOut'}/>
      </div>
      <p className = "Work2boldP">A logo was created to represent the <span>connection</span> Majesty creates among women of color.</p>
      <div className= "Work2ImgSocial">
        <img src = '/images/majesty3.png' className = {this.state.showWork2  ? 'fadeIn' : 'fadeOut'}/>
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
