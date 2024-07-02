import React from "react";
import './Navbar.css'

function Navbar() {
    return (
       <nav className="navbar">
  
          <div className="navbar-left">
            <h1><a href="/"> STUDYNT </a></h1>
          </div>
  
          <div className="navbar-center">
            <input
              type="search"
              className="search-bar rounded"
              placeholder="Search..."
            />
          </div>
  
          <div className="navbar-right">
          <h3> <a href="/">Create</a> </h3>
          </div>
  
        </nav>
    );
  }

export default Navbar;