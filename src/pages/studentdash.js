import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Adminheader from '../components/adminheader';
import Studentdb from '../components/studentdb';

class studentdash extends Component {
    render() {
        return (
        <div>
 <Adminheader/>
 <Sidebar/>
 <Studentdb/>
       </div>
)
    }
}
export default studentdash;