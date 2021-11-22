import React from 'react'
import profile_icon from '../images/profile_icon.svg'

function About() {
    return (
        <div className="container" style={{ minHeight: "91vh", minWidth: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="card" style={{ width: "30rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                    className="card-img-top mt-2"
                    src={profile_icon}
                    alt="Card image cap"
                    style={{ height: "200px", width: "200px" }}
                />
                <div className="card-body">
                    <h5 className="card-title">Prathamesh Thombre</h5>
                    <p className="card-text">Web Developer</p>
                    <div className="row">

                        <div className="col-md-6">
                            <h6>User Id</h6>
                        </div>
                        <div className="col-md-6">
                            <p>0101010</p>
                        </div>

                        <div className="col-md-6">
                            <h6>Name</h6>
                        </div>
                        <div className="col-md-6">
                            <p>Prathamesh Thombre</p>
                        </div>

                        <div className="col-md-6">
                            <h6>Email</h6>
                        </div>
                        <div className="col-md-6">
                            <p>pthombre657@gmail.com</p>
                        </div>


                        <div className="col-md-6">
                            <h6>Phone</h6>
                        </div>
                        <div className="col-md-6">
                            <p>8989898956</p>
                        </div>

                        <div className="col-md-6">
                            <h6>Profession</h6>
                        </div>
                        <div className="col-md-6">
                            <p>Web Developer</p>
                        </div>

                    </div>
                </div>
                <a href="#" className="btn btn-primary mb-2">Edit Profile</a>
            </div>
        </div>
    )
}

export default About
