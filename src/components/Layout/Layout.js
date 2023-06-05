import React from 'react'
import NavBar from '../Layout/NavBar'
import Footer from './Footer'
import '../Layout/Layout.css'

const Layout = (props) => {
    return(
        <div>
            <NavBar />

            {props.children}

        <Footer />
       
        </div>
    )
}

export default Layout