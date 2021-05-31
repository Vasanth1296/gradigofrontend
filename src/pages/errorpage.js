import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from '../components/error'
import Headermain from '../components/headermain';



class contact extends Component {
    render() {
        return (
		<div>
            <Headermain />
            <Error/>
    
        </div>
)
    }
}
export default contact;
