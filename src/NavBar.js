import react from "react";
import { NavLink } from "react-router-dom"

function NavBar({ countDown }) {
  return (
    <div id="navBar">
        <NavLink
          to="/"
          exact
          className="navLink"
          activeClassName="active"
        >
          Crypto List
        </NavLink>
        <NavLink
          to="/comments"
          exact
          className="navLink"
          activeClassName="active"
        >
          Comments
        </NavLink>

      {/* <h3 className="first">Crypto List</h3> */}
      {/* <h3 className="child">Link 2</h3> */}
      {/* <h3 className="child">Comments</h3> */}
      <p className="space"></p>
      <p>Prices update in <b>{countDown}</b></p>
    </div>
  )
};

export default NavBar;