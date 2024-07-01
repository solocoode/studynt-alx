import React from "react";
import './Channel.css';

function Channel() {
    return (
        <div className="channel">
            <div className="channel-main">
                <h1>s/Channel</h1>
                <ChannelCard/>
                <hr/>
            </div>
            <div className="channel-chat">
                <ChatFunctionality/>
            </div>
        </div>
    );
}

export default Channel;



function ChannelCard() {
    return (
        <div className="channel-card">
            <div className="channel-card-info">
                <h6>u/UserName</h6>
                <h4> * </h4>
                <h6>23 hr, ago</h6>
            </div>

            <div className="channel-card-title">
                <h3>Eductational Hackathon Study</h3>
                <p>
                We are a group of students from the SFU School of Interactive Arts and Technology, 
                working on an exciting interface design project. 
                Our aim is to gather insights from hackathon participants, 
                mentors, and organizers regarding your experiences within the educational hackathon 
                community. If you have ever mentored, participated in, or organized a hackathon before, 
                we kindly ask you to take the time to fill out the appropriate survey below. 
                Your participation will help contribute valuable input that can shape a platform tailored 
                to meet the needs, challenges, and aspirations of educational hackathon stakeholders at 
                all levels.
                </p>
            </div>
        </div>
    );
}


function ChatFunctionality() {
    //const [comment, setComment] = useState(''); // State to store comment text
  
    //const handleChange = (event) => {
      //setComment(event.target.value);
    //};
  
    //const handleSubmit = (event) => {
      //event.preventDefault(); // Prevent default form submission behavior
      // Implement logic to handle comment submission (e.g., send to server)
      //console.log('Submitted comment:', comment);
      //setComment(''); // Clear comment after submission (optional)
    //};
    return (
        <div className="chat-functionality">
            <textarea
                    className="chat-input"
                    placeholder="Type message..."
                    //value={comment}
                    //onChange={handleChange}
                />
                <button type="submit" className="chat-send">
                    Send
                </button>
        </div>
    );
}


// add sidebar