import { Link } from "react-router-dom";

import "./Register.css";



export const Register = () => {
    return (
        <div className="register-wrapper container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow p-4" style={{ width: "100%", maxWidth: 500 }}>
                <h3 className="text-center mb-4">Register</h3>
                <form>
                    {/* Name */}
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            required=""
                        />
                    </div>
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
                    {/* Confirm Password */}
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm password"
                            required=""
                        />
                    </div>
                    {/* Gender */}
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>
                    {/* Terms */}
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">
                            I agree to terms &amp; conditions
                        </label>
                    </div>
                    {/* Submit */}
                    <button type="submit" className="btn btn-primary w-100">
                        Register
                    </button>
                </form>
                <p className="text-center mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    )
}
