import React from "react";
import './Sidebar.css'
import { Link } from 'react-router-dom';


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
          <h4>CHANNELS</h4>
          <h3> <Link to="/channel">s/Channel</Link> </h3>
          <h3> <Link to="/channel">s/Channel</Link> </h3>
          <h3> <Link to="/channel">s/Channel</Link> </h3>
          <h3> <Link to="/channel">s/Channel</Link> </h3>
          <h3> <Link to="/channel">s/Channel</Link> </h3>
          <h3> <Link to="/channel">s/Channel</Link> </h3>
          <h3> <Link to="/channel">s/Channel</Link> </h3>
          <h3> <Link to="/channel">s/Channel</Link> </h3>
          <h3> <Link to="/channel">s/Channel</Link> </h3>
          <h3> <Link to="/channel">s/Channel</Link> </h3>
        </div>
      </div>
    );
  }
  
  
  
export default Sidebar;