import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const handleLoginToggle = () => {
    setLoginBtn((prevLoggedIn) => !prevLoggedIn);
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "Online" + " 🟢" : "Offline" + " 🔴"}</li>
          <li>
            <Link className="costom-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="costom-link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="costom-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="costom-link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="costom-link" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
        <div className="login-container">
          <button className="login" onClick={handleLoginToggle}>
            {loginBtn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
