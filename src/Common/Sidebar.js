import React, { useState, useEffect } from "react";
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore";

function Sidebar() {
    return (
      <div className="sidebar">
        <Channels />
      </div>
    );
}

function Channels() {
    const [channels, setChannels] = useState([]);

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

    return (
      <div className="channels">
        <div className="channel">
          <h4>CHANNELS</h4>
          {channels.map(channel => (
            <h3 key={channel.id}>
              <Link to={`/channel/${channel.name}`}>s/{channel.name}</Link>
            </h3>
          ))}
        </div>
      </div>
    );
}

export default Sidebar;
