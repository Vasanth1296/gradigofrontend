import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Headermain from '../components/headermain';
import Instructors from '../components/instructors';
import Footer from '../components/footernew';
import Sidebar from '../components/sidebar';
class instructor extends Component {
    render() {
        return (
		<div>
        <Headermain/>
        <Sidebar/>
	    <Instructors/>
		</div>
)
    }
}
export default instructor;