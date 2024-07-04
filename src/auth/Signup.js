
import React, { useState } from "react";
import './Signup.css';
import TabButton from "../Common/TabButton";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyAf9hUkup5H7sYcqeR_t2nk7S_td9Fupdo",
    authDomain: "studynt-alx.firebaseapp.com",
    projectId: "studynt-alx",
    storageBucket: "studynt-alx.appspot.com",
    messagingSenderId: "84292910854",
    appId: "1:84292910854:web:a30a526d8dc1d99c216887",
    measurementId: "G-FQX9WFCDZN"
  };

initializeApp(firebaseConfig);

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const validateEmail = (email) => {
    // eslint-disable-next-line 
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    // Add your password complexity requirements here (e.g., minimum length, uppercase, lowercase, symbols)
    return password.length >= 8;
  };

  const onButtonClick = async (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');
    setUsernameError('');

    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long'); // Adjust as needed
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential.user);
      // Handle successful signup (e.g., redirect to a confirmation page or dashboard)
      navigate('/'); // Replace with your desired redirect path
    } catch (error) {
      console.error('Signup error:', error);
      // Handle signup errors appropriately (e.g., display error message)
      switch (error.code) {
        case 'auth/email-already-in-use':
          setEmailError('Email already in use');
          break;
        case 'auth/weak-password':
          setPasswordError('Password is weak');
          break;
        default:
          setEmailError('Signup failed');
      }
    }
  };

  return (
    <div className="mainContainer">
      <div className="child">
        <TabButton />
        <div className="titleContainer">
          <div>Sign Up</div>
        </div>
        <br />
        <div className="inputContainer">
          <input
            value={username}
            placeholder="Enter your username here"
            onChange={(ev) => setUsername(ev.target.value)}
            className="inputBox"
          />
          <label className="errorLabel">{usernameError}</label>
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
                <input className="inputButton" type="button" onClick={onButtonClick} value={'Sign up'} />
            </div>
        </div>
    </div>
  )
}


export default Signup;
