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
    <div className="flex justify-between shadow-lg h-20">
      <div className="pl-7 py-3">
        <img className="w-14" src={logo} />
      </div>

      <div className="flex items-center pr-7">
        <ul className="flex space-x-7 items-center text-sm text-slate-700 font-medium">
          <li className="hover:text-orange-400 cursor-pointer">
            {onlineStatus ? "Online" + " 🟢" : "Offline" + " 🔴"}
          </li>
          <li className="hover:text-orange-400">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-400">
            <Link className="costom-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="hover:text-orange-400">
            <Link className="costom-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="hover:text-orange-400">
            <Link className="costom-link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="hover:text-orange-400">
            <Link className="costom-link" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <button
              className="px-3 py-2 rounded-lg text-center  bg-violet-300"
              onClick={handleLoginToggle}
            >
              {loginBtn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
