import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import About from './About.js';
import Home from './Home.js';
import '/stylesheets/css/app.css';
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
              <a href = '#' className = {homeActive} onClick = {this.menuClickDesktop.bind(this, 'home')}>Work</a>
              <h2 className = "myNameDesktop">NAILY NEVAREZ</h2>
              <a href = '#' className = {aboutActive} onClick = {this.menuClickDesktop.bind(this, 'about')}>About</a>
            </div>
            <h2 className = "myNameMobile">NAILY NEVAREZ</h2>
            <ul className = "mobileList">
              <li><a href = '#' className = {homeActive} onClick = {this.menuClickMobile.bind(this, 'home')}>Work</a></li>
              <li><a href = '#' className = {aboutActive} onClick = {this.menuClickMobile.bind(this, 'about')}>About</a></li>
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
      </ErrorBoundary>
    );
  }
}
