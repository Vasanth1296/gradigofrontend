import React from "react";

import Menu from "./Menu";


const Base = ({
    title = "Gradigo",
    description = "Learning Education",
}) => {
  return (
        <div>
          <Menu/>
          <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center">
              <h2 className="display-4">{title}</h2>
              <p className="lead">{description}</p>
            </div>
            
          </div>
        </div>
    );
};


export default Base;