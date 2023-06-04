import React from 'react'
import Layout from '../Layout/Layout'
import '../Home/Home.css';

const Home = () => {
  return(
    <Layout>
 <form className="email-container">
        <h2 className="email-title">Join our Mailing List</h2>
        <div className="email-parent">

        <label>Email:</label>
        <input className="email-input"type="email" placeholder="Enter your email..."/>
        <label>Receive Updates:</label>
        <input className="checkbox" type="checkbox"/>
        </div>
         <button class="email-btn">Add</button>
  
     </form>
   
    </Layout>
  )
}


export default Home