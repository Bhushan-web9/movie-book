import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/home/Home';
import Details from "./screens/details/Details"
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/details" exact component={Details} />
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
