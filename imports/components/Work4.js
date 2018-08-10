import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary.js';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import '/stylesheets/css/app.css';


export default class Work4 extends Component {
  constructor(props){
    super(props);
    this.state = {
      showWork4: true,
    };
  }



  render() {
    return (
      <ErrorBoundary>
      <div className= "Work4Text">
      <h1>OR-Kids</h1>
      <h3>ICON DESIGN</h3>
      <p className = {this.state.showWork4 ? 'fadeIn' : 'fadeOut'}>
      OR Kids is a child welfare database under the Oregon Department of Human Services (DHS).
      DHS Social workers use OR Kids to record information about their cases and ensure the overall
      safety and well-being of children in Oregon. (link to website)
      <br/>
      <br/>
      In preparation for their database update, OR Kids was in need of a desktop icon that
      could communicate key details of the database in a clear and coherent manner, and
      thus sent out an announcement for icon submissions.
      </p>
      <p className = {this.state.showWork4 ? 'fadeIn' : 'fadeOut'}>
        <b>My role:</b> <br/>Graphic Designer <br/><br/>
      </p>
      </div>
      <p className ="Work4boldP">I designed an icon that emphasized an underlying concept behind OR-Kids — <span>new beginnings</span> for children in Oregon.</p>
      <div className= "Work4Img1-Mobile">
      <img src = '/images/orkids1.png' className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}/>
      </div>
      <p className ="Work4boldP"> The icon is currently displayed on an
      estimated <span>3,000</span> screens.
      </p>
      <p className ="Work4boldP">
      <span>Other icon concepts</span>
      </p>
      <div className= "Work4Imgs-Mobile">
      <img src = '/images/orkids3.png' className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/orkids4.png' className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}/>
      <img src = '/images/orkids5.png' className = {this.state.showAbout ? 'fadeIn' : 'fadeOut'}/>
      </div>
      <div className= "Work4links">
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
