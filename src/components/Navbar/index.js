import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import UserContext from "../../context/userContext";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
      setUserData({
          token: undefined,
          user: undefined
      })
      localStorage.setItem("auth-token","");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
       What Are We Watching?
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/discover"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              Discover
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signin"
              className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}
            >
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Sign Up 
            </Link>
            </li>
            <li>
            <Link
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
              onClick={logout} >
              Log Out 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
