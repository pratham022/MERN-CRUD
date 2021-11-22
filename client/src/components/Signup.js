import React from 'react'
import { NavLink } from 'react-router-dom'
import signup_icon from '../images/signup_icon.svg'

function Signup() {
    return (
        <div className="container mt-5 ml-5">
            <div class="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div class="col-md-6">
                    <h2>Sign up</h2>
                    <form>
                        <input type="text" class="form-control mt-2" placeholder="Your Name" aria-label="Your Name" id="name" name="name"></input>
                        <input type="email" class="form-control mt-2" placeholder="Your Email" aria-label="Your Email" id="email" name="email"></input>
                        <input type="number" class="form-control mt-2" placeholder="Mobile Number" aria-label="Mobile Number" id="phone" name="phone"></input>
                        <input type="text" class="form-control mt-2" placeholder="Your Profession" aria-label="Your Profession" id="profession" name="profession"></input>
                        <input type="password" class="form-control mt-2" placeholder="Password" aria-label="Password" id="password" name="password"></input>
                        <input type="password" class="form-control mt-2" placeholder="Confirm Password" aria-label="Confirm Password" id="cpassword" name="cpassword"></input>
                        <button type="submit" class="btn btn-primary mt-2">Register</button>
                        <div className="mt-2">
                            <NavLink to="/login">Already a User? Login</NavLink>
                        </div>

                    </form>
                </div>
                <div class="col-md-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={signup_icon} style={{ height: "240px", width: "240px" }} />
                </div>
            </div>
        </div>
    )
}

export default Signup
