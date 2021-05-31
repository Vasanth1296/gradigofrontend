import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
import Footer from '../components/footer';
import Coursedetails_in from '../components/coursedetails_in';
import HeaderMain from '../components/headermain';

class coursedetails extends Component {
    render() {
        return (
		<div>
		<HeaderMain />
		<Coursedetails_in/>
		<Footer />
		</div>
)
    }
}
export default coursedetails;