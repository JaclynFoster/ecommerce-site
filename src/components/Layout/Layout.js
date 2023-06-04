import React from 'react'
import NavBar from '../Layout/NavBar'
import '../Layout/Layout.css'

const Layout = (props) => {
    return(
        <div>
            <NavBar />
            {props.children}
        </div>
    )
}

export default Layout