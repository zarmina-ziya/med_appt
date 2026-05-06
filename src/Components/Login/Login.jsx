import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from "../../../config";
import './Login.css'; // Ensure your CSS is imported

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // If user is already authenticated, redirect to home page
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, [navigate]);

  // Consolidated Handle Submit (Login) Function
  const login = async (e) => {
    e.preventDefault();

    // POST request to the login API
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const json = await res.json();

    if (json.authtoken) {
      // Store items in session storage
      sessionStorage.setItem('auth-token', json.authtoken);
      sessionStorage.setItem('email', email);

      // Redirect to home page
      navigate('/');
      
      // IMPORTANT: Force a window reload so the Navbar updates its state
      window.location.reload();
    } else {
      // Handle server-side validation or credential errors
      if (json.errors) {
        for (const error of json.errors) {
          alert(error.msg);
        }
      } else {
        alert(json.error || "Invalid credentials. Please try again.");
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="login-grid">
          <div className="login-text">
            <h2>Login</h2>
          </div>
          <div className="login-text">
            Are you a new member? 
            <span>
              <Link to="/sign-up" style={{ color: '#2190FF' }}>
                Sign Up Here
              </Link>
            </span>
          </div>
          <br />
          <div className="login-form">
            <form onSubmit={login}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="form-control" 
                  placeholder="Enter your email" 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="btn-group">
                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;