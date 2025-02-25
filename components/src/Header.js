import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlinStatus = useOnlineStatus();
  return (
    <div className="head">
      <img alt="Logo" className="logo" src={LOGO_URL} />
      <h2 className="foodapp">Food For You</h2>
      <ul className="nav-items">
        {/* connecting the the links with the components without reloading the page */}
        <li>Online Status : {onlinStatus ? "😍" : "😡"}</li>
        <li>
          <Link className="link-style" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/grocery">
            Grocery
          </Link>
        </li>
        <li>Cart</li>
        <li>
          <button
            className="lbtn"
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
