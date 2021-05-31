import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Adminheader from '../components/adminheader';
import Admindashboard from '../components/admindashboard';


class dash extends Component {
    render() {
        return (
		<div>
        <Adminheader/>
		<Sidebar/>
        <Admindashboard/>
		</div>
)
    }
}
export default dash;