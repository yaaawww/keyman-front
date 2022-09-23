import "./style.css"
import React, {useState} from "react";
import loginImg from "../../rust_key.jpg";
import { useNavigate } from "react-router-dom";
import PasswordService from "../../services/keyman_service";

const Register = (props) => {
  const navigate = useNavigate();
  const initFormState = {username: '', password: ''};
  const [user, setUser] = useState(initFormState);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleInputChange = event => {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("has submited");
    console.log(user)
    PasswordService.register(user)
      .then(response => {
        if(response.data === "success") {
          navigate('/Login');
        } else {
          setErrorMessage(response.data);
        }
      });
  };

  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Register</div>
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
              <span>Register</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;