import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaCircle } from "react-icons/fa";

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
          <li className="hover:text-orange-400 cursor-pointer flex">
            {onlineStatus ? (
              <>
                Online
                <FaCircle className="text-[8px] mt-2 ml-1 text-green-500" />
              </>
            ) : (
              <>
                Offline
                <FaCircle className="text-[8px] mt-2 ml-1 text-red-500" />
              </>
            )}
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
