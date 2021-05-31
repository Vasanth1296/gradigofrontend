import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
import Header from '../components/header';
import Footer from '../components/footer';
import Coursedetails_in from '../components/coursedetails_in';
import Afterlogin_in from '../components/afterlogin_in';
import Login_nav from '../components/login_nav';
import Afterloginnav from '../components/afterloginnav';

class afterlogin extends Component {
    render() {
        return (
		<div>
		<Afterloginnav />
		<Login_nav />
		<Footer />
		</div>
)
    }
}
export default afterlogin;