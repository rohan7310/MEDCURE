import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="mc-nav">
      <div className="mc-container">
        <Link to="/" className="mc-brand">
          <span className="mc-dot" />
          Med<span className="mc-accent">Cure</span>+
        </Link>

        <div className="mc-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "mc-link active" : "mc-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/appointment"
            className={({ isActive }) =>
              isActive ? "mc-link active" : "mc-link"
            }
          >
            Appointment
          </NavLink>

          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive ? "mc-link active" : "mc-link"
            }
          >
            Doctors
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "mc-link active" : "mc-link"
            }
          >
            Login
          </NavLink>

          <Link to="/appointment" className="mc-btn">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
