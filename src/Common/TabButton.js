import React from "react";
import './TabButton.css'
import { Link } from 'react-router-dom'

function TabButton() {
    return (
        <div className="tabButtonContainer">
            <div className="tabButton">
                <button>
                    <Link to="/login"><span>Login</span></Link>
                </button>
            </div>
            <div className="tabButton">
                <button>
                    <Link to="/signup"><span>Sign Up</span></Link>
                </button>
            </div>
        </div>
    );
}

export default TabButton;