import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Teachheader from '../components/teachheader';
//import Teachdashboard from '../components/teachdashboard';


class dash extends Component {
    render() {
        return (
		<div>
        <Teachheader/>
		<Sidebar/>
       
		</div>
)
    }
}
export default dash;