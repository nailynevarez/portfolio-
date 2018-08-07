import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from "react-router-dom";
import App from './components/App';
import '/stylesheets/css/app.css';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('render-target'));
