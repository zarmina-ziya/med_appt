import React from "react";
import "./Sign_Up.css";

const SignUp = () => {
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="signup-grid">

        {/* Title */}
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>

        {/* Login link */}
        <div className="signup-text1" style={{ textAlign: "left" }}>
          Already a member?{" "}
          <span>
            <a href="../Login/Login.html" style={{ color: "#2190FF" }}>
              Login
            </a>
          </span>
        </div>

        {/* Form */}
        <div className="signup-form">
          <form>

            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="form-control"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            {/* Role */}
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                name="role"
                id="role"
                required
                className="form-control"
              >
                <option value="">Select your role</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
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
                Submit
              </button>

              <button
                type="reset"
                className="btn btn-danger mb-2"
              >
                Reset
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default SignUp;