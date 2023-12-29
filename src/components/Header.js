import logo from "../../assets/logo.png"
import { useState } from "react";

const Header = () => {

  const [loginBtn, setLoginBtn] = useState("Login");

  const handleLoginToggle = () => {
    setLoginBtn((prevLoggedIn) => !prevLoggedIn);
  }

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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