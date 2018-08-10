import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import '/stylesheets/css/app.css';


export default class Work6 extends Component {
  constructor(props){
    super(props);
    this.state = {
      showWork6: true,
    };
  }



  render() {
    return (
      <ErrorBoundary>
      <div className= "Work6Text">
      <h1>Yanin Art</h1>
      <h3>FOUNDER</h3>
      <p className = {this.state.showWork6 ? 'fadeIn' : 'fadeOut'}>
      In the summer of 2015, I began <a href = "http://www.etsy.com/shop/Yaninart" target="_blank">Yanin Art</a> - a shop that specializes in
      creating acrylic paintings. While I love taking custom requests, many of my original
      creations depict cultures, my own interests, and advocate for social justice and equality.
      </p>
      <p className = {this.state.showWork6 ? 'fadeIn' : 'fadeOut'}>
      <b>My role:</b> <br/>
      Painter &
      Manager of all Yanin Art products
      </p>
      </div>
      <div className= "Work6Imgs">
      <img src = '/images/cap1.jpg' className = {this.state.showWork6 ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/cap2.jpg' className = {this.state.showWork6 ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/cap3.jpg' className = {this.state.showWork6 ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/cap4.jpg' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/cap5.jpg' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/cap6.jpg' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/cap9.jpg' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/cap18.jpg' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/cap11.jpg' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/cap12.jpg' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/cap13.jpg' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/cap15.jpg' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/cap16.jpg' className = {this.state.showWork6 ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/cap17.jpg' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      </div>
      <p className ="Work6boldP">Handcrafted from start to finish, Yanin Art brings visions to <span>life.</span></p>
      <div className= "Work6Img1">
        <img src = '/images/coco1.jpg' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
        <img src = '/images/disney1.jpg' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
        <img src = '/images/mulan1.jpg' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      </div>
      <p className ="Work6boldP">Up to now, Yanin Art has sold over <span>150</span> paintings and received over <span>45</span> five-star reviews.</p>
      <div className= "Work6ImgReviews-Desktop">
      <img src = '/images/review1-desktop.png' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/review2-desktop.png' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      </div>
      <div className= "Work6ImgReviews-Mobile">
      <img src = '/images/review1-mobile.png' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/review2-mobile.png' className = {this.state.showWork6  ? 'fadeIn' : 'fadeOut'}/>
      </div>

      <div className= "Work6links">
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
