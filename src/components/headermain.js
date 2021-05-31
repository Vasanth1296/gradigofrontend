import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

 
export default class Headermain extends Component {
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
              <li><Link to="/">Course</Link></li>
              &nbsp; &nbsp;&nbsp;
            </ul>
            <p className="user">
                      <Link><BiUserCircle/></Link>
                      </p>
            <p className="cart">
                      <Link><AiOutlineShoppingCart/></Link>
                      </p>
          </nav>
          
          
        </div>

      </header>

      </div>
)
    }
}
/*<UncontrolledDropdown setActiveFromChild>
<li><DropdownToggle  tag="a" className="nav-link" caret>
  Course
</DropdownToggle></li>
<DropdownMenu>
  <DropdownItem tag="a" href="/blah" active>Link</DropdownItem>
</DropdownMenu>
</UncontrolledDropdown>*/
//import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';