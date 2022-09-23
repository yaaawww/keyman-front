import { BrowserRouter, Route, Link } from "react-router-dom";
import PasswordService from "../services/keyman_service";
import { useNavigate} from "react-router-dom";
import "./style.scss";

export default function Navbar() {
  const navigate = useNavigate();
    return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="/">🦀🔐 keyman</a>
        </div>
        <div className="nav-mobile">
          <a id="nav-toggle" href="#!"><span></span></a>
        </div>
        <nav className="nav-list">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/Register">Register</a></li>
            <li><a href="/Login">Login</a></li>
            <li><a href="/" onClick={() =>  {
              PasswordService.logout();
              navigate("/");
            }
            }>Logout</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
}