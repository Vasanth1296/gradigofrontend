import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
import HeaderMain from '../components/headermain';
import Footer from '../components/footer';
import Courselist from '../components/courselist';


class courselists extends Component {
    render() {
        return (
		<div>
		<HeaderMain />
		<Courselist />
	
		</div>
)
    }
}
export default courselists;
