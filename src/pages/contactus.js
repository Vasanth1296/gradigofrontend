import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
import HeaderMain from '../components/headermain';
import Footer from '../components/footer';
import Contactus from '../components/contactus';
import Footernew from '../components/footernew';


class contactus extends Component {
    render() {
        return (
		<div>
        <HeaderMain/>
		<Contactus />
         <Footer/>
		</div>
)
    }
}
export default contactus;
