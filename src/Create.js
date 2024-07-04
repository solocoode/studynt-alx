import React, { useState, useEffect } from "react";
import './Create.css';
import Navbar from "./Common/Navbar";
import Sidebar from "./Common/Sidebar";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

function Create() {
    const [channels, setChannels] = useState([]);
    const [selectedChannel, setSelectedChannel] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        fetchChannels();
    }, []);

    const fetchChannels = async () => {
        const db = getFirestore();
        const channelsCollection = collection(db, 'channels');
        const channelsSnapshot = await getDocs(channelsCollection);
        const channelsList = channelsSnapshot.docs.map(doc => ({
            id: doc.id,
            name: doc.data().name
        }));
        setChannels(channelsList);
    };

    const handlePost = async () => {
        if (!selectedChannel || !title || !content) {
            alert('Please fill in all fields.');
            return;
        }

        const db = getFirestore();
        const postsCollection = collection(db, 'posts');
        await addDoc(postsCollection, {
            channel: selectedChannel,
            title: title,
            content: content,
            timestamp: new Date()
        });

        // Clear form fields after posting
        setSelectedChannel('');
        setTitle('');
        setContent('');

        alert('Post successfully added!');
    };

    return (
        <div className="create">
            <Navbar />
            <Sidebar />
            <div className="create-container">
                <div className="create-child">
                    <div className="create-container-header">
                        <h6>Create a new post</h6>
                    </div>
                    <div className="create-container-channel">
                        <DropdownMenu
                            options={channels.map(channel => channel.name)}
                            selectedOption={selectedChannel}
                            setSelectedOption={setSelectedChannel}
                        />
                    </div>
                    <div className="create-container-title">
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="create-container-content">
                        <textarea
                            placeholder="Body..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="post-button">
                        <button onClick={handlePost}>
                            <h6>Post</h6>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;

const DropdownMenu = ({ options, selectedOption, setSelectedOption }) => {
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="dropdown-menu-container">
            <select value={selectedOption} onChange={handleChange}>
                <option value="">Select a channel</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};
