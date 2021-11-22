import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import signup_icon from '../images/signup_icon.svg'

function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        work: '',
        password: '',
        cpassword: ''
        
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]: value})
    }

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });

        const data = await res.json();

        if(!data || data.status === 422) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else {
            window.alert("Success Registration");
            console.log("Success Registration");

            navigate('/login');
        }
    }
    return (
        <div className="container mt-5 ml-5">
            <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="col-md-6">
                    <h2>Sign up</h2>
                    <form method="POST">
                        <input 
                            type="text" 
                            className="form-control mt-2" 
                            placeholder="Your Name" 
                            aria-label="Your Name" 
                            id="name" 
                            name="name" 
                            value={user.name} 
                            onChange={handleInputs}>

                        </input>
                        <input 
                            type="email" 
                            className="form-control mt-2" 
                            placeholder="Your Email" 
                            aria-label="Your Email" 
                            id="email" 
                            name="email"
                            value={user.email}
                            onChange={handleInputs}>
                            
                        </input>
                        <input 
                            type="number" 
                            className="form-control mt-2" 
                            placeholder="Mobile Number" 
                            aria-label="Mobile Number" 
                            id="phone" 
                            name="phone" 
                            value={user.phone} 
                            onChange={handleInputs}>
                            
                        </input>
                        <input 
                            type="text" 
                            className="form-control mt-2" 
                            placeholder="Your work" 
                            aria-label="Your work" 
                            id="work" 
                            name="work"
                            value={user.work}
                            onChange={handleInputs}
                            >

                        </input>
                        <input 
                            type="password" 
                            className="form-control mt-2" 
                            placeholder="Password" 
                            aria-label="Password" 
                            id="password" 
                            name="password" 
                            value={user.password}
                            onChange={handleInputs}>

                        </input>
                        <input 
                            type="password" 
                            className="form-control mt-2" 
                            placeholder="Confirm Password" 
                            aria-label="Confirm Password" 
                            id="cpassword" 
                            name="cpassword" 
                            value={user.cpassword}
                            onChange={handleInputs}>

                        </input>
                        <button 
                            type="submit" 
                            className="btn btn-primary mt-2" 
                            name="register" 
                            value="register"
                            onClick={postData} 
                        >
                            Register
                        </button>
                        <div className="mt-2">
                            <NavLink to="/login">Already a User? Login</NavLink>
                        </div>

                    </form>
                </div>
                <div className="col-md-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={signup_icon} style={{ height: "240px", width: "240px" }} />
                </div>
            </div>
        </div>
    )
}

export default Signup
