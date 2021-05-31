import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Adminheader from '../components/adminheader';
import Adminset from '../components/adminset';


class set extends Component {
    render() {
        return (
		<div>
        <Adminheader/>
		<Sidebar/>
        <Adminset/>
		</div>
)
    }
}
export default set;