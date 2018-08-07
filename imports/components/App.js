import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import About from './About.js';
import Home from './Home.js';
import '/stylesheets/css/app.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem: 'home',
      checkBox: false,
    };
  }

  //define which menu was clicked
  menuClickMobile = (name) => {
    if (name == 'home') {
      this.reloadPage();
    }
    else {
      this.setState({
        activeItem: name,
      });
    }
    this.checkClick();
    //scroll to the top
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  menuClickDesktop = (name) => {
    if (name == 'home') {
      this.reloadPage();
    }
    else {
      this.setState({
        activeItem: name,
      });
    }
    //scroll to the top
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  //if menu is 'home,' refresh the page
  reloadPage = () => {
    window.location.reload();
  }

  checkClick = () => {
    this.setState({
      checkBox: !this.state.checkBox,
    });
    console.log(this.state.checkBox);
  }

  render() {

    //if menu active
    let homeActive = 'home';
    if (this.state.activeItem == 'home') {
      homeActive = 'homeActive';
    }

    //if about active
    let aboutActive = 'about';
    if (this.state.activeItem == 'about') {
      aboutActive = 'aboutActive';
    }

    //which menu to show
    let component = null;
    switch (this.state.activeItem) {
      case 'home':
        component = <Home />;
        break;
      case 'about':
        component = <About />;
        break;
    }

    return (
      <ErrorBoundary>
      <BrowserRouter>
      <ReactCSSTransitionGroup
      transitionName = 'bodyFadeIn'
      transitionAppearTimeout = {1700}
      transitionAppear = {true}
      transitionLeave = {false}
      transitionEnter = {false}>
        <body>
          <input id = 'burger' type = 'checkbox' checked = {this.state.checkBox} onClick = {this.checkClick.bind(this)}/>
          <label for = 'burger'>
            <span></span>
            <span></span>
            <span></span>
          </label>
          <nav>
            <div className = "desktopMenu">
              <Link to = 'work' className = {homeActive} onClick = {this.menuClickDesktop.bind(this, 'home')}>Work</Link>
              <h2 className = "myNameDesktop">NAILY NEVAREZ</h2>
              <Link to = 'about' className = {aboutActive} onClick = {this.menuClickDesktop.bind(this, 'about')}>About</Link>
            </div>
            <h2 className = "myNameMobile">NAILY NEVAREZ</h2>
            <ul className = "mobileList">
              <li><Link to = 'work' className = {homeActive} onClick = {this.menuClickMobile.bind(this, 'home')}>Work</Link></li>
              <li><Link to = 'about' className = {aboutActive} onClick = {this.menuClickMobile.bind(this, 'about')}>About</Link></li>
            </ul>
          </nav>
          <main>
           {component}
          </main>
          <footer>
            Copyright &copy; Naily Nevarez
          </footer>
        </body>
      </ReactCSSTransitionGroup>
      </BrowserRouter>
      </ErrorBoundary>
    );
  }
}
