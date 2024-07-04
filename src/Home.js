import React, { useState, useEffect } from 'react';
import './Home.css';
import Sidebar from './Common/Sidebar';
import Navbar from './Common/Navbar';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function Home() {
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
                ...doc.data()
            }));
            setPosts(postsList);
        } catch (error) {
            console.error('Error fetching posts: ', error);
        }
    };

    return (
        <div className="Home">
            <div className="Home-header">
                <Navbar />
                <div className="appchild">
                    <Sidebar />
                    <Cards posts={posts} />
                    <Recents posts={posts.slice(0, 10)} />
                </div>
            </div>
        </div>
    );
}

function Cards({ posts }) {
    return (
        <div className="cards">
            {posts.map(post => (
                <div className="card" key={post.id}>
                    <h5>
                        <Link to={`/${post.channel}`}>{post.channel}</Link>
                    </h5>
                    <h6>{post.title}</h6>
                    <p>{post.content}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

function Recents({ posts }) {
    return (
        <div className="recents">
            <div className="recent">
                <h6>RECENT POSTS</h6>
                <hr />
                <RecentsCard posts={posts} />
            </div>
        </div>
    );
}

function RecentsCard({ posts }) {
    return (
        <div className="recentscard">
            {posts.map(post => (
                <div className="recentcard" key={post.id}>
                    <h5>{post.channel}</h5>
                    <p>{post.title}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Home;
