import React, { useState, useEffect } from "react";
import './Profile.css';
import { getAuth, updateProfile, updateEmail, updatePassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setUsername(currentUser.displayName || '');
        setEmail(currentUser.email);
      } else {
        navigate('/login');
      }
    });

    return unsubscribe;
  }, [auth, navigate]);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      if (username && username !== user.displayName) {
        await updateProfile(auth.currentUser, { displayName: username });
      }

      if (email && email !== user.email) {
        await updateEmail(auth.currentUser, email);
      }

      if (password) {
        await updatePassword(auth.currentUser, password);
      }

      setUser(auth.currentUser);
      setEditMode(false);
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!user) {
    return null; // Return null if user is not set to avoid rendering the component
  }

  return (
    <div className="profile-container">
      <h1>Welcome, {username || 'User'}</h1>
      {!editMode ? (
        <div className="profile-info">
          <p>Username: {username || 'N/A'}</p>
          <p>Email: {email}</p>
          <button className="edit-button" onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <form className="profile-form" onSubmit={handleSave}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="input-box"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="input-box"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            type="password"
            className="input-box"
          />
          <div className="button-group">
            <button className="save-button" type="submit">Save</button>
            <button className="cancel-button" onClick={handleEdit}>Cancel</button>
          </div>
        </form>
      )}
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
