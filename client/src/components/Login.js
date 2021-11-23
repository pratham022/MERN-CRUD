import React, { useState } from 'react'
import login_icon from '../images/login_icon.svg';
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await res.json();

        if(!data || res.status === 400) {
            window.alert("Invvalid Credentials");
        }
        else {
            window.alert("Login Success");
            navigate('/')
        }
    }

    return (
        <div className="container mt-5 ml-5">
            <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="col-md-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={login_icon} style={{ height: "240px", width: "240px" }} />
                </div>
                <div className="col-md-6">
                    <h2>Login</h2>
                    <form method="POST">
                        <input 
                            type="email" 
                            className="form-control mt-2" 
                            placeholder="Your Email" 
                            aria-label="Your Email" 
                            id="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                                
                        </input>
                        <input 
                            type="password" 
                            className="form-control mt-2" 
                            placeholder="Password" 
                            aria-label="Password" 
                            id="password" 
                            name="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >

                            </input>
                        <button 
                            type="submit" 
                            className="btn btn-primary mt-2"
                            onClick={loginUser}
                        >Login</button>
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
