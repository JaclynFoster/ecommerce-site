import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'

const NavBar = () => {
    return(
        <div>
        <div className="nav">
      
            <img src={logo}className="logo"/>
            <h1 className="h1-logo">Welcome to the Farm!</h1>
           
            <div className="link">

            <Link to="/">Home</Link>
            <Link to="/animals">Animals</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/cart">Cart</Link>
            </div>
        </div>
      
        <div className="email-parent">
        <h2 className="email-title">Join our Mailing List!</h2>

        <label>Email:</label>
        <input className="email-input"type="email" placeholder="Enter your email..."/>
        <label>Receive Updates:</label>
        <input className="checkbox" type="checkbox"/>
         <button class="email-btn">Add</button>
        </div>
    
        </div>
    )
}

export default NavBar