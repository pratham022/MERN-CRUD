import React from 'react'

function Contact() {
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="card col mx-1">
                    <div className="card-body">
                        <h5 className="card-title">Phone</h5>
                        9090909087
                    </div>
                </div>
                <div className="card col mx-1">
                    <div className="card-body">
                        <h5 className="card-title">Email</h5>
                        pthombre657@gmail.com
                    </div>
                </div>
                <div className="card col mx-1">
                    <div className="card-body">
                        <h5 className="card-title">Address</h5>
                        Ambegaon Bk, Pune
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <h2>Get In Touch</h2>
                <div className="col-md-3 mx-1">
                    <input type="text" className="form-control mt-2" placeholder="Your Name" aria-label="Your Name" id="name" name="name"></input>
                </div>
                <div className="col-md-3 mx-1">
                    <input type="email" className="form-control mt-2" placeholder="Your Email" aria-label="Your Email" id="email" name="email"></input>
                </div>
                <div className="col-md-3 mx-1">
                    <input type="number" className="form-control mt-2" placeholder="Your Phone Number" aria-label="Your Phone Number" id="phone" name="phone"></input>
                </div>
                <div className="col-md-12 mx-1">
                    <textarea type="text" className="form-control mt-2" placeholder="Message" aria-label="Message" id="message" name="message"></textarea>
                </div>
                <div className="col-md-4 mx-1">
                    <button type="submit" className="btn btn-primary mt-2">Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
