import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Teachheader from '../components/teachheader';
import Teachset from '../components/teachset';


class set extends Component {
    render() {
        return (
		<div>
        <Teachheader/>
		<Sidebar/>
        <Teachset/>
		</div>
)
    }
}
export default set;