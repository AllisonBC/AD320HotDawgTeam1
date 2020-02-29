import React from 'react';
import './Footer.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Admin from '../Admin';
import Vendor from '../Vendor';



  export default function Footer() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="" target="_blank">Admin</Link>
            </li>
            <li>
              <Link to="/Vendor">Vendor</Link>
            </li>
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/Admin">
              <Admin />
            </Route>
            <Route path="/Vendor">
              <Vendor />
            </Route>
            
            
          </Switch>
        </div>
      </Router>
    );
  }