import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <div className="head">
    <img alt="Logo" className="logo" src={LOGO_URL} />
    <h2 className="foodapp">Food For You</h2>
    <ul className="nav-items">
      <li style={{ color: "blue" }}>Home</li>
      <li>Restaurants</li>
      <li>Profile</li>
      <li>Cart</li>
    </ul>
  </div>
);

export default Header;
