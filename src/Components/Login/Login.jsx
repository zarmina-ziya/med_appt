import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="login-grid">

        {/* Login Heading */}
        <div className="login-text">
          <h2>Login</h2>
        </div>

        {/* Sign up link */}
        <div className="login-text">
          Are you a new member?{" "}
          <span>
            <a href="../Sign_Up/Sign_Up.html" style={{ color: "#2190FF" }}>
              Sign Up Here
            </a>
          </span>
        </div>

        <br />

        {/* Login Form */}
        <div className="login-form">
          <form>
            
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>

            {/* Buttons */}
            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1"
              >
                Login
              </button>

              <button
                type="reset"
                className="btn btn-danger mb-2"
              >
                Reset
              </button>
            </div>

            <br />

            {/* Forgot password */}
            <div className="login-text">
              Forgot Password?
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;