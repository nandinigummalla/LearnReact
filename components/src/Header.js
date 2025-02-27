import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlinStatus = useOnlineStatus();
  return (
    <div className="flex items-center bg-gray-100 p-1 m-1 justify-between shadow-xl">
      <img alt="Logo" className="w-15 m-1" src={LOGO_URL} />
      <h2 className="mr-150 text-xl">Food For You</h2>
      <ul className="flex justify-between p-7 mx-5">
        {/* connecting the the links with the components without reloading the page */}
        <li className="px-1">Online Status : {onlinStatus ? "😍" : "😡"}</li>
        <li>
          <Link className="px-1 hover:text-xl" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="px-1 hover:text-xl" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="px-1 hover:text-xl" to="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="px-1 hover:text-xl" to="/grocery">
            Grocery
          </Link>
        </li>
        <li className="px-1 hover:text-xl">Cart</li>
        <li>
          <button
            className="px-1 cursor-pointer hover:text-xl"
            onClick={() =>
              btn === "Login" ? setBtn("Logout") : setBtn("Login")
            }
          >
            {btn}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
