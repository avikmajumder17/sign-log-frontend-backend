import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";


import "./Login.css";




export const Login = () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    const userDetails = {
      email: e.target.email.value,
      password: e.target.password.value
    };

    try {
      await axios.post(
        "https://sign-log-in-backend.onrender.com/api/v1/users/log-in",
        userDetails
      );

      toast.success("User Login Successful");

      e.target.reset();
    } catch (err) {
      toast.error(err.message || "Error occured");
    }
  };

  return (
    <div className="login-wrapper container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card glass-card shadow p-4"
        style={{ width: "100%", maxWidth: 400 }}
      >
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              required=""
            />
          </div>
          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              required=""
            />
          </div>
          {/* Remember Me */}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Remember me</label>
          </div>
          {/* Submit */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/register" className="text-white">Register</Link>
        </p>
      </div>
    </div>
  )
}