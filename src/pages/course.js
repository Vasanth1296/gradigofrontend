import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
import HeaderMain from '../components/headermain';
import Footer from '../components/footer';
import Coursepage from '../components/coursepage';


class course extends Component {
    render() {
        return (
		<div>
		<HeaderMain />
		<Coursepage />
		<Footer />
		</div>
)
    }
}
export default course;
