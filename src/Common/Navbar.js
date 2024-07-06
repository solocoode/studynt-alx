import React from "react";
import './Navbar.css'
import {Link} from "react-router-dom";

function Navbar() {
    return (
       <nav className="navbar">
  
          <div className="navbar-left">
            <h1> <Link to="/"> STUDYNT </Link> </h1>
          </div>
  
          <div className="navbar-center">
            <input
              type="search"
              className="search-bar rounded"
              placeholder="Search..."
            />
          </div>
  
          <div className="navbar-right">
          <h3>
            <Link to="/create">Create</Link> 
          </h3>
          <div className="profile">
            <Link to="/profile"> <img src="logo192.png" alt="Profile" className="profile-icon" /> </Link>
          
          </div>
          </div>
          
        </nav>
    );
  }

export default Navbar;