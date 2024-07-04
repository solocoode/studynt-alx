import React, { useState } from "react";
import './Login.css';
import TabButton from "../Common/TabButton";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import for navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Please enter your email');
      return;
    }

    if (!password) {
      setPasswordError('Please enter your password');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      // Handle successful login (e.g., redirect to dashboard)
      navigate('/'); // Replace with your desired redirect path after login
    } catch (error) {
      console.error('Login error:', error);
      // Handle login errors appropriately (e.g., display error message)
      switch (error.code) {
        case 'auth/wrong-password':
          setPasswordError('Incorrect password');
          break;
        case 'auth/user-not-found':
          setEmailError('Email not found. Please check your email or create an account.');
          break;
        default:
          setEmailError('Login failed');
      }
    }
  };

  return (
    <div className="mainContainer">
      <div className="child">
        <TabButton />
        <div className="titleContainer">
          <div>Login</div>
        </div>
        <br />
        <div className="inputContainer">
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className="inputBox"
          />
          <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className="inputContainer">
          <input
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className="inputBox"
            type="password"
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className="inputContainer">
          <input className="inputButton" type="button" onClick={handleLogin} value="Log in" />
        </div>
      </div>
    </div>
  );
};

export default Login;
