import React from 'react'
import '../App.css';

function Home() {
    return (
        <div className="container home-container" style={{ minHeight: "91vh", minWidth: "100vw" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "91vh" }}>
                <h3>Welcome to the Simple MERN Project</h3>
                <p>Prathamesh Thombre welcomes you on-board</p>
            </div>
        </div>
    )
}

export default Home
