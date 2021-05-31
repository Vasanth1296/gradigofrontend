import React, { Component } from 'react';
import {Form,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

 
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
        <div className="search">
            <Form className="example">
  <input type="text"  placeholder="Search"/>
  <p className="sicon"><Link to="" class="fas fa-search"></Link></p>
 
</Form>
</div>
<Button>
course List
</Button>      
<Link to="" class="far fa-bell"></Link>
        </div>
       
      </header>

      </div>
)
    }
}
