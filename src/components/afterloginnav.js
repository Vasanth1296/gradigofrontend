import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
 
export default class Afterloginnav extends Component {
    render() {
        return (
        <div>
        <button type="botton" class="mobile-nav-toggle d-lg-none">
        <i class="inocont-navigation-menu"></i>
        </button>
		<header id="header" className="fixed-top d-flex align-items-center header-transparent">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto"><a href="index.html">Gradigo</a></h1>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li><Link to="/">Home</Link></li>
             
              <li><Link to="course">Courses</Link></li>
              &nbsp; &nbsp;&nbsp;
            </ul>
          </nav>
          <Link to="login" className="get-started-btn">Logout</Link>
         

        </div>

      </header>

      </div>
)
    }
}
