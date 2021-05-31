import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
import HeaderMain from '../components/headermain';
import Footer from '../components/footer';
import Terms from '../components/terms';
import Termsnav from '../components/termsnav';

class terms extends Component {
    render() {
        return (
		<div>
		<HeaderMain />
	    <Terms/>
      <Termsnav/>

		</div>
)
    }
}
export default terms;
