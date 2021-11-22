import React from 'react'
import { NavLink } from 'react-router-dom'
import icon_404 from '../images/icon_404.svg'

function ErrorPage() {
    return (
        <div className="container" style={{ minHeight: "91vh", minWidth: "100vw", display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center" }}>
            <img
                    className="card-img-top mt-2"
                    src={icon_404}
                    alt="Card image cap"
                    style={{ height: "200px", width: "200px" }}
                />
            <h3>We are Sorry, Page Not Found</h3>
            <p>
                The page that you are looking for might have been removed, had its name changed or is temporarily unavailable
            </p>
            <NavLink to="/">Back to Home</NavLink>
        </div>
    )
}

export default ErrorPage
