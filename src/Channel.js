import React, { useState, useEffect } from "react";
import './Channel.css';
import Sidebar from './Common/Sidebar';
import Navbar from './Common/Navbar';
import { getFirestore, collection, getDocs } from "firebase/firestore";

function Channel() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const db = getFirestore();
            const postsCollection = collection(db, 'posts');
            const postsSnapshot = await getDocs(postsCollection);
            const postsList = postsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                timestamp: doc.data().timestamp ? doc.data().timestamp.toDate() : new Date()
            }));
            postsList.sort((a, b) => b.timestamp - a.timestamp); // Sort posts by timestamp in descending order
            setPosts(postsList);
        } catch (error) {
            console.error('Error fetching posts: ', error);
        }
    };

    return (
        <div className="channel">
            <Navbar />
            <div className="channel-box">
                <Sidebar />
                <div className="channel-main">
                    <h1>s/{posts.channel}</h1>
                    {posts.map(post => (
                        <div key={post.id}>
                            <ChannelCard
                                username="User" // Assuming post data includes an 'author' field
                                timestamp={post.timestamp && post.timestamp instanceof Date ? post.timestamp.toLocaleString() : "N/A"}
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

function ChannelCard({ username, title, body, timestamp }) {
    return (
        <div className="channel-card">
            <div className="channel-card-info">
                <h6>{username}</h6>
                <p>.</p>
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

export default Channel;
