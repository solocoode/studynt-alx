import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Channel from './Channel';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
            <Route index element={<Home/>}/> 
            <Route path="/channel" element={<Channel />} /> 
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


