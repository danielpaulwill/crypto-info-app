import react, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
  const [countDown, setCountDown] = useState(60)

  function timer() {
    if (countDown < 2) {
      setCountDown(60)
    } else {
      setCountDown(countDown => countDown - 1)
    }
  };

  useEffect(() => {
    setTimeout(() => timer(), 1000)
  }, [countDown])

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
        <NavLink
          to="/info"
          exact
          className="navLink"
          activeClassName="active"
        >
          Add'l Info
        </NavLink>

      <p className="space"></p>
      <p>Prices update in <b>{countDown}</b></p>
    </div>
  )
};

export default NavBar;