import React,{ Component } from 'react';
import {SidebarData} from './sidebardata'


class Sidebar extends Component {
        render() {
    return(
        <div className="sidebar">
            <ul className="sidebarList">
            {SidebarData.map((val, key)=>{                     
            return ( 
                <li
                 key={key}
                 className="row"
                 id={window.location.pathname == val.link ? "active" : ""}
                  onClick={()=> {
                      window.location.pathname = val.link
                      }}
                      >
                    <div id="icon">{val.icon}
                    </div>
                    <div id="title">
                        {val.title}
                    </div>
                     </li>
            );
        })} 
        </ul> 
        </div>
    );
}}

export default Sidebar;