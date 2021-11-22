import React from 'react'
import login_icon from '../images/login_icon.svg';
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <div className="container mt-5 ml-5">
            <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="col-md-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={login_icon} style={{ height: "240px", width: "240px" }} />
                </div>
                <div className="col-md-6">
                    <h2>Login</h2>
                    <form>
                        <input type="email" className="form-control mt-2" placeholder="Your Email" aria-label="Your Email" id="email" name="email"></input>
                        <input type="password" className="form-control mt-2" placeholder="Password" aria-label="Password" id="password" name="password"></input>
                        <button type="submit" className="btn btn-primary mt-2">Login</button>
                        <div className="mt-2">
                            <NavLink to="/signup">New User? Register</NavLink>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
