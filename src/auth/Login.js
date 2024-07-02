import React, {useState} from "react";
import './Login.css'
import TabButton from "../Common/TabButton";


const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError] = useState('')
  const [passwordError] = useState('')

  //const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later...
  }

  return (
    <div className="mainContainer">
        <div className="child">
            <TabButton/>
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
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className="inputContainer">
                <input className="inputButton" type="button" onClick={onButtonClick} value={'Log in'} />
            </div>
        </div>
    </div>
  )
}

export default Login

//forgot password feature