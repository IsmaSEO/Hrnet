import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <Link to="/">
          <img
            src="src/assets/img/logo.webp"
            alt="Wealth Health Logo"
            className="navbar-logo"
          />
        </Link>
        <h1 className="navbar-title">WealthHealth IntraNetwork</h1>
      </div>
      <nav>
        <ul className="navbar-links">
          <li>
            <Link to="/">Create Employee</Link>
          </li>
          <li>
            <Link to="/employees">View Employees</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
