import "./navbar.css";
import headerlogo from "../../assets/images/header-logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()
  const handleClick = () => {
    logout()
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <img className="brand-logo" src={headerlogo} alt="Header Logo" />
        </Link>
        {user ? (
          <div>
            <span>Hey, {user.username}!       </span>
            <button className="logout" onClick={handleClick}>Logout</button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/signup">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
            <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
