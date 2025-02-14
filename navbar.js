// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice

import React from "react";
import ReactDOM from "react-dom/client";

const Navbar = () => (
  <div className="nav">
    <h1 className="logo">Nandy</h1>
    <input id="search" type="text" placeholder="search" />
    <i id="user" class="fa fa-user"></i>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navbar />);
