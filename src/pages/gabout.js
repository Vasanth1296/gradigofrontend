import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
import Headermain from '../components/headermain';
import Footer from '../components/footer';
import Coursedetails_in from '../components/coursedetails_in';
import About from '../components/about';
import Feedback from '../components/feedback';
import Footernew from '../components/footernew';

class gabout extends Component {
    render() {
        return (
		<div>
		<Headermain />
		<About />
		<Feedback/>
		<Footernew/>
		</div>
)
    }
}
export default gabout;