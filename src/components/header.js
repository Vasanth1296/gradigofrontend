import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
 


export default class HeaderMain extends Component {
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
              &nbsp; &nbsp;&nbsp;
             <li><Link to="gabout">About</Link></li>
             &nbsp; &nbsp;&nbsp; 
              <li><Link to="course">Courses</Link></li>
              &nbsp; &nbsp;&nbsp;
              <li><Link to="contactus">Contact</Link></li>
              &nbsp; &nbsp; &nbsp;
              
              <li ><Link to="" class="far fa-user-circle"></Link></li>
              <li ><Link to="login" >Login/Register</Link></li>
              &nbsp; &nbsp;&nbsp;
            </ul>
          </nav>
        </div>

      </header>

      </div>
)
    }
}


