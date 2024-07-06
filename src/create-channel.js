import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './create-channel.css';

function CreateChannel() {
    const [channelName, setChannelName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const db = getFirestore();
            const channelsCollection = collection(db, 'channels');
            await addDoc(channelsCollection, {
                name: channelName
            });
            navigate(`/${channelName}`);
        } catch (error) {
            console.error('Error creating channel: ', error);
        }
    };

    return (
        <div className="create-channel">
            <h1>Create Channel</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Channel Name"
                    value={channelName}
                    onChange={(e) => setChannelName(e.target.value)}
                    required
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateChannel;