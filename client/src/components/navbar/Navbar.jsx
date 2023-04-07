import "./navbar.css";
import headerlogo from "../../assets/images/header-logo.svg";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <img className="brand-logo" src={headerlogo} alt="Header Logo" />
        </Link>
        {user ? `Hey, ${user.username}!` : (
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>)}
      </div>
    </div>
  );
};

export default Navbar;
