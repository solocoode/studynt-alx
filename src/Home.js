import React from 'react';
import './Home.css';
import Sidebar from './Common/Sidebar'
import Navbar from './Common/Navbar'
import { Link } from 'react-router-dom';



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
    return (
      <div className="cards">
        <div className="card">
          <h5>
            <Link to="/channel" target='blank'>s/Channel</Link>
          </h5>
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