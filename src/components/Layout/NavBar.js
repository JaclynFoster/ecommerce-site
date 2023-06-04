import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'

const NavBar = () => {
    return(
        <div className="nav">
            <h1>Welcome to the Farm!</h1>
            <img src={logo}className="logo"/>
            <div className="link">
            <Link to="/">Home</Link>
            <Link to="/animals">Animals</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            </div>
           
        </div>
    )
}

export default NavBar