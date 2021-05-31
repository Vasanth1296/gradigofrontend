import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import '../signinstyle.css';
import Signin_name from '../components/signin_name';
import Signin_in from '../components/signin_in';


class signin extends Component {
    render() {
        return (
		<div>
		<Signin_name/>
		<Signin_in />
		</div>
)
    }
}
export default signin;