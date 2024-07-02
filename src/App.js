import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Channel from './Channel';
import Create from './Create';
import Login from './auth/Login';
import Signup from './auth/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
            <Route index element={<Home/>}/> 
            <Route path="/channel" element={<Channel />} /> 
            <Route path="/create" element={<Create/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

