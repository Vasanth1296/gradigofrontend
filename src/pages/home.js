import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homes from '../components/homes';
import Homes2 from '../components/homes2';
import Footer from '../components/footer';
import Headermain from '../components/headermain';

class home extends Component {
    render() {
        return (
		<div>
            
        <Homes/>
        <Homes2/>
		<Footer/>
		</div>
)
    }
}
export default home;