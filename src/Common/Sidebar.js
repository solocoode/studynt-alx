import React from "react";
import './Sidebar.css'


function Sidebar() {
    return (
      <div className="sidebar">
        <Categories/>
        <hr/>
        <Channels/>
      </div>
    );
  }
  
  function Categories() {
    return (
      <div className="categories">
        <div className="category-item">
          <h3> <a href="/">Home</a> </h3>
          <h3> <a href="/">Popular</a> </h3>
          <h3> <a href="/">All</a> </h3>
        </div>
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