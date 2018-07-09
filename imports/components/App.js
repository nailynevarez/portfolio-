import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import About from './About.js';
import Home from './Home.js';
import Contact from './Contact.js';
import '/client/main.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem: 'home',
    };
  }

  //define which menu was clicked
  menuClick = (name) => {
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

    //if contact active
    let contactActive = 'about';
    if(this.state.activeItem == 'contact') {
      contactActive = 'contactActive';
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
      case 'contact':
        component = <Contact />;
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
          <nav>
            <a href = '#' className = {homeActive} onClick = {this.menuClick.bind(this, 'home')}>HOME</a>
            <a href = '#' className = {aboutActive} onClick = {this.menuClick.bind(this, 'about')}>ABOUT</a>
            <pre>
            Logo or<br />   Name</pre>
            <a href = '/documents/pdf.pdf'>RESUME</a>
            <a href = '#' className = {contactActive} onClick = {this.menuClick.bind(this, 'contact')}>CONTACT</a>
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
