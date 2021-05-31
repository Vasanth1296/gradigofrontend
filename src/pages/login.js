import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login_name from '../components/login_name';
import Login_in from '../components/login_in';

class login extends Component {
    render() {
        return (
		<div>
		<Login_name/>
		<Login_in />
		</div>
)
    }
}
export default login;