import React from "react";
import './Sidebar.css'


function Sidebar() {
    return (
      <div className="sidebar">
        <Channels/>
      </div>
    );
  }
  
  function Channels() {
    return (
      <div className="channels">
        <div className="channel">
          <h4>COMMUNITIES</h4>
          <h3> <a href="/">Math</a> </h3>
          <h3> <a href="/">English</a> </h3>
          <h3> <a href="/">Computer</a> </h3>
          <h3> <a href="/">Math</a> </h3>
          <h3> <a href="/">English</a> </h3>
          <h3> <a href="/">Computer</a> </h3>
        </div>
      </div>
    );
  }
  
  
  
export default Sidebar;