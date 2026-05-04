import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import { Loader } from "../../components/Loader/Loader";


import "./Register.css";



export const Register = () => {
    const [isLoading, setIsLoading] = useState(false);



    const handleRegister = async (e) => {
        e.preventDefault();

        const userDetails = {
            name: e.target.fullname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            passwordConfirm: e.target.passwordconfirm.value,
            gender: e.target.gender.value,
        }

        try {
            setIsLoading(true);

            await axios.post(
                "https://sign-log-in-backend.onrender.com/api/v1/users/sign-up",
                userDetails
            );          

            toast.success("User Registration Successful");

            e.target.reset();
        } catch (err) {
            toast.error(err.message || "Error occurred");
        } finally {
            setIsLoading(false);
        }
    };    



    return (
        <>
            { isLoading && <Loader /> }

            <div className="register-wrapper container d-flex justify-content-center align-items-center vh-100">
                <div className="card shadow p-4" style={{ width: "100%", maxWidth: 500 }}>
                    <h3 className="text-center mb-4">Register</h3>
                    <form onSubmit={handleRegister}>
                        {/* Name */}
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="fullname"
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
                                name="email"
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
                                name="password"
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
                                name="passwordconfirm"
                                placeholder="Confirm password"
                                required=""
                            />
                        </div>
                        {/* Gender */}
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" value="male" type="radio" name="gender" />
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" value="female" type="radio" name="gender" />
                                <label className="form-check-label">Female</label>
                            </div>
                        </div>
                        {/* Terms */}
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" required />
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
                        Already have an account? <Link to="/login" className="text-white">Login</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
