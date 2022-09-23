import "./style.css"
import React, { useState } from "react";
import loginImg from "../../hi_rust.png";
import { useNavigate } from "react-router-dom";
import PasswordService from "../../services/keyman_service";


const Login = (props) => {
  const navigate = useNavigate();
  const initFormState = {username: '', password: ''};
  const [user, setUser] = useState(initFormState);
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleInputChange = event => {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("has submited");
    PasswordService.login(user)
      .then(response => {
        console.log(response.data);
        if (typeof(response.data) === "object") {
          response.authdata = window.btoa(user.username + ':' + user.password);
          localStorage.setItem('user', JSON.stringify(response));
          navigate("/dashboard")
        } else {
          setErrorMessage(response.data);
        }
      })
  };

  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text"
              name="username" 
              placeholder="username"
              value={user.username}
              onChange={handleInputChange}  
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="password"
              value={user.password}
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <p>
            {errorMessage}
            </p>
          </div>
          <div>
            <button type="submit" className="button button--pan">
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;