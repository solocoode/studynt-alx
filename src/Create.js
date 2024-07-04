import React from "react";
import { useState } from "react";
import './Create.css'
import Navbar from "./Common/Navbar";
import Sidebar from "./Common/Sidebar";
//import { db } from "./auth/Auth";
//import { Firestore } from "firebase/firestore";

function Create() {
    const options = ['s/Option 1', 's/Option 2', 's/Option 3', 's/Option 4'];
    return (
        <div className="create">
            <Navbar />
            <Sidebar />
            <div className="create-container">
                <div className="create-child">
                    <div className="create-container-header">
                        <h6>Create a new post</h6>
                    </div>
                    <div className="create-container-chaneel">
                        <DropdownMenu options={options} />
                    </div>
                    <div className="create-container-title">
                        <input type="text" placeholder="Title"/>
                    </div>
                    <div className="create-container-content">
                        <textarea placeholder="Body..."></textarea>
                    </div>
                    <div className="post-button">
                        <button>
                            <h6>Post</h6>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
const DropdownMenu = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown-menu-container">
        <select value={selectedOption} onChange={handleChange}>
            <option value="">Select an option</option>
            {options.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
            ))}
        </select>
    </div>
  );
};
