import { Link } from "react-router-dom";

import "./Login.css";



export const Login = () => {
  return (
    <div className="login-wrapper container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card glass-card shadow p-4"
        style={{ width: "100%", maxWidth: 400 }}
      >
        <h3 className="text-center mb-4">Login</h3>
        <form>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
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
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}