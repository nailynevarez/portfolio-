import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import '/client/main.css';


export default class Web extends Component {
  constructor(props){
    super(props);
    this.state = {
      showWebCategory: true,
      showWebProject: false,
      activeWebProject: null,
    };
  }

  backToCategory = () => {
    this.setState({
      showWebCategory: !(this.state.showWebCategory),
      showWebProject: !(this.state.showWebProject),
    });

  }



  displayWebProject = (name) => {
    this.setState({
      showWebCategory: !(this.state.showWebCategory),
      showWebProject: !(this.state.showWebProject),
    });

    if (name == "project1") {
      this.setState({
        activeWebProject: 'project1',
      });
    }

    if (name == 'project2') {
      this.setState({
        activeWebProject: 'project2'
      });
    }
  }





  render() {
    let project = null;
    switch (this.state.activeWebProject) {
      case 'project1':
      project = <WebProject1 />
      break;
      case 'project2':
      project = <WebProject2 />
      break;
    }


    return (
      <ErrorBoundary>
      { this.state.showWebCategory ?
      <div className = 'webProjects'>
      <img src = '/images/placeholder2.png' onClick = {this.displayWebProject.bind(this, 'project1')}/>
      <img src = '/images/placeholder2.png'onClick = {this.displayWebProject.bind(this, 'project2')}/>
      </div>
      : null}
      {this.state.showWebProject ?
      <div>
        <img src = '/images/arrow.png' onClick = {this.backToCategory.bind(this)} height = '50' width = '50' />
      </div> : null }
      { this.state.showWebProject ? project : null}
      </ErrorBoundary>
    );
  }
}


const WebProject1 = () => (
  <div className = 'project1'>
  <p>This is project 1</p>
  </div>
)

const WebProject2 = () => (
  <div className = 'project2'>
  <p>This is project 2</p>
  </div>
)
