import React, { useState, useEffect } from "react";
import './Channel.css';
import Sidebar from './Common/Sidebar';
import Navbar from './Common/Navbar';
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

function Channel() {
    const { channelName } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (channelName) {
            fetchPosts(channelName);
        }
    }, [channelName]);

    const fetchPosts = async (channelName) => {
        const db = getFirestore();
        const postsCollection = collection(db, 'posts');
        const q = query(postsCollection, where('channel', '==', channelName));
        const querySnapshot = await getDocs(q);
        const postsData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setPosts(postsData);
    };

    return (
        <div className="channel">
            <Navbar />
            <div className="channel-box">
                <Sidebar />
                <div className="channel-main">
                    <h1>s/{channelName}</h1>
                    {posts.map(post => (
                        <div key={post.id}>
                            <ChannelCard
                                username="User" // Replace with actual username logic if available
                                timestamp={post.timestamp.toDate().toLocaleString()}
                                title={post.title}
                                body={post.content}
                            />
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Channel;

function ChannelCard({ username, title, body, timestamp }) {
    return (
        <div className="channel-card">
            <div className="channel-card-info">
                <h6>{username}</h6>
                <h4> * </h4> {/* Placeholder for any additional information */}
                <h6>{timestamp}</h6>
            </div>
            <div className="channel-card-title">
                <h3>{title}</h3>
            </div>
            <div className="channel-card-body">
                <p>{body}</p>
            </div>
        </div>
    );
}
