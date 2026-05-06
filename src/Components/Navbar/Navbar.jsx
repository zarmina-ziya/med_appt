import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Function to check if user is logged in
  const checkAuth = () => {
    const token = sessionStorage.getItem("auth-token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuth();
    // This allows the Navbar to update if the user logs in/out in another tab
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = () => {
    sessionStorage.clear(); // Remove all user data
    setIsLoggedIn(false);
    navigate("/login");
    window.location.reload(); // Force a refresh to reset all component states
  };

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">StayHealthy</Link>
      </div>

      <ul className="nav__links">
        <li className="link"><Link to="/">Home</Link></li>
        <li className="link"><Link to="/booking-consultation">Appointments</Link></li>

        {isLoggedIn ? (
          <li className="link">
            <button className="btn-logout" onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <>
            <li className="link">
              <Link to="/sign-up"><button className="btn1">Sign Up</button></Link>
            </li>
            <li className="link">
              <Link to="/login"><button className="btn1">Login</button></Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;