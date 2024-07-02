import React from "react";
import './Create.css'
import Navbar from "./Common/Navbar";
import Sidebar from "./Common/Sidebar";

function Create() {
    return (
        <div className="create">
            <Navbar />
            <Sidebar />
            <div className="create-container">
                <div className="create-child">
                    <div className="create-container-header">
                        <h6>Create a new post</h6>
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