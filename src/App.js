import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="appchild">
        <Sidebar/>
        <Cards/>
        <Recents/>
      </div>
    </div>
  );
}

export default App;


function Navbar() {
  return (
     <nav className="navbar">

        <div className="navbar-left">
          <h1><a href="/"> STUDYNT </a></h1>
        </div>

        <div className="navbar-center">
          <input
            type="search"
            className="search-bar rounded"
            placeholder="Search..."
          />
        </div>

        <div className="navbar-right">
        <h3> <a href="/">Create</a> </h3>
        </div>

      </nav>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <Categories/>
      <hr/>
      <Channels/>
    </div>
  );
}

function Categories() {
  return (
    <div className="categories">
      <div className="category-item">
        <h3> <a href="/">Home</a> </h3>
        <h3> <a href="/">Popular</a> </h3>
        <h3> <a href="/">All</a> </h3>
      </div>
    </div>
  );
}

function Channels() {
  return (
    <div className="channels">
      <div className="channel">
        <h4>COMMUNITIES</h4>
        <h3> <a href="/">Math</a> </h3>
        <h3> <a href="/">English</a> </h3>
        <h3> <a href="/">Computer</a> </h3>
        <h3> <a href="/">Math</a> </h3>
        <h3> <a href="/">English</a> </h3>
        <h3> <a href="/">Computer</a> </h3>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <h5>s/Channel</h5>
        <h6>How has addiction affected your life?</h6>
        <p>Addiction can be a dark cloud that casts a long shadow.
           It can seep into every corner of your life, affecting your health,
            relationships, and even your sense of self. 
             Finances can become strained as you prioritize your addiction, 
             leading to debt or neglecting responsibilities.
               The people you love may grow distant as trust erodes and broken promises pile up.
                 The worst part can be the internal struggle – the guilt, shame, 
                 and the constant battle between wanting to stop and the overwhelming 
                 pull of the addictive behavior. 
          Addiction can steal your joy and leave you feeling empty and alone. 
        </p>
        <hr/>
      </div>
    </div>
  );
}

function Recents() {
  return (
    <div className="recents">
      <div className="recent">
        <h6>RECENT POSTS</h6>
        <hr/>
        <RecentsCard/>
      </div>
    </div>
  );
}

function RecentsCard() {
  return (
    <div className="recentscard">
      <div className="recentcard">
        <h5>s/Channel</h5>
        <p>Realm-based Hackathon - Aim for Impact</p>
        <hr/>

        <h5>s/Channel</h5>
        <p>Realm-based Hackathon - Aim for Impact</p>
        <hr/>
        
        <h5>s/Channel</h5>
        <p>Realm-based Hackathon - Aim for Impact</p>
        <hr/>
        
        <h5>s/Channel</h5>
        <p>Realm-based Hackathon - Aim for Impact</p>
        <hr/>
        
        <h5>s/Channel</h5>
        <p>Realm-based Hackathon - Aim for Impact</p>
        <hr/>
        
        <h5>s/Channel</h5>
        <p>Realm-based Hackathon - Aim for Impact</p>
        <hr/>
        
        <h5>s/Channel</h5>
        <p>Realm-based Hackathon - Aim for Impact</p>
        <hr/>
        
        <h5>s/Channel</h5>
        <p>Realm-based Hackathon - Aim for Impact</p>
        <hr/>
        
        <h5>s/Channel</h5>
        <p>Realm-based Hackathon - Aim for Impact</p>
        <hr/>
      </div>
    </div>
  );
}