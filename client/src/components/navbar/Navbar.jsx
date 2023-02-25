import "./navbar.css";
import headerlogo from "../../assets/images/header-logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
          <img className="brand-logo" src={headerlogo} alt="Header Logo" />
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
