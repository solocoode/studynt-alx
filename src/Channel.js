import React, { useState, useEffect } from "react";
import './Channel.css';
import Sidebar from './Common/Sidebar';
import Navbar from './Common/Navbar';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

function Channel() {
    const [posts, setPosts] = useState([]);
    const [channels, setChannels] = useState([]);
    const [selectedChannel, setSelectedChannel] = useState(null);

    useEffect(() => {
        fetchChannels();
    }, []);

    useEffect(() => {
        if (selectedChannel) {
            fetchPosts();
        }
    }, [selectedChannel]);

    const fetchChannels = async () => {
        try {
            const db = getFirestore();
            const channelsCollection = collection(db, 'channels');
            const channelsSnapshot = await getDocs(channelsCollection);
            const channelsList = channelsSnapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name
            }));
            setChannels(channelsList);
            // Select the first channel by default
            if (channelsList.length > 0) {
                setSelectedChannel(channelsList[0]);
            }
        } catch (error) {
            console.error('Error fetching channels: ', error);
        }
    };

    const fetchPosts = async () => {
        try {
            const db = getFirestore();
            const postsCollection = collection(db, 'posts');
            const q = query(postsCollection, where("channel", "==", selectedChannel.name));
            const postsSnapshot = await getDocs(q);
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

    const handleChannelChange = (event) => {
        const channelId = event.target.value;
        const selectedChannel = channels.find(channel => channel.id === channelId);
        setSelectedChannel(selectedChannel);
    };

    return (
        <div className="channel">
            <Navbar />
            <div className="channel-box">
                <Sidebar />
                <div className="channel-main">
                    <select onChange={handleChannelChange} value={selectedChannel ? selectedChannel.id : ''}>
                        {channels.map(channel => (
                            <option key={channel.id} value={channel.id}>
                                {channel.name}
                            </option>
                        ))}
                    </select>
                    {selectedChannel && <h1>{selectedChannel.name}</h1>}
                    <hr />
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
