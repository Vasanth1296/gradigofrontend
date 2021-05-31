import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
import HeaderMain from '../components/headermain';
import Footer from '../components/footer';
import Contactuss from '../components/contactuss';
import Footernew from '../components/footernew';


class contactusteam extends Component {
    render() {
        return (
		<div>
            <HeaderMain/>
		<Contactuss />
        
		</div>
)
    }
}
export default contactusteam;
