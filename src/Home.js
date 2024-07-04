import React, { useState, useEffect } from 'react';
import './Home.css';
import Sidebar from './Common/Sidebar';
import Navbar from './Common/Navbar';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function Home() {
    return (
        <div className="Home">
            <div className="Home-header">
                <Navbar />
                <div className="appchild">
                    <Sidebar />
                    <Cards />
                    <Recents />
                </div>
            </div>
        </div>
    );
}

export default Home;

function Cards() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const db = getFirestore();
        const postsCollection = collection(db, 'posts');
        const postsSnapshot = await getDocs(postsCollection);
        const postsList = postsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setPosts(postsList);
    };

    return (
        <div className="cards">
            {posts.map(post => (
                <div className="card" key={post.id}>
                    <h5>
                        <Link to={`/channel/${post.channel}`}> {post.channel}</Link>
                    </h5>
                    <h6>{post.title}</h6>
                    <p>{post.content}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

function Recents() {
    return (
        <div className="recents">
            <div className="recent">
                <h6>RECENT POSTS</h6>
                <hr />
                <RecentsCard />
            </div>
        </div>
    );
}

function RecentsCard() {
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        fetchRecentPosts();
    }, []);

    const fetchRecentPosts = async () => {
        const db = getFirestore();
        const postsCollection = collection(db, 'posts');
        const postsSnapshot = await getDocs(postsCollection);
        const postsList = postsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setRecentPosts(postsList.slice(0, 10)); // Displaying the 10 most recent posts
    };

    return (
        <div className="recentscard">
            {recentPosts.map(post => (
                <div className="recentcard" key={post.id}>
                    <h5>{post.channel}</h5>
                    <p>{post.title}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}
