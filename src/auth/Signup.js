import React, {useState} from "react";
import './Signup.css'
import TabButton from "../Common/TabButton";

const Signup = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError] = useState('')
  const [passwordError] = useState('')
  const [username, setUsername] = useState('')
  const [usernameError] = useState('')

  //const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later...
  }

  return (
    <div className="mainContainer">
        <div className="child">
            <TabButton/>
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