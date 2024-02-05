import React from 'react'
// import Container from 'react-bootstrap/Container';
import {Link, Outlet} from "react-router-dom"



const NavBar = () => {
  return (
    <div className=' bg-dark  pt-4'> 
    <div className='container d-flex justify-content-around  '>
  <div className='container d-flex justify-content-around'>
    <Link to="/" className='container text-decoration-none text-white'><h4 >FAVDEVS.</h4></Link></div>
 <div className='container d-flex justify-content-around'>
     <Link to="/Projects"  className="text-decoration-none text-white">Projects</Link>
     <Link to="/DownloadResume" className="text-decoration-none text-white">Download Resume</Link>
     <Link to="/Contacts"  className="text-decoration-none text-white">Contact</Link>
     <Link to="/MessageSent"  className="text-decoration-none text-white"></Link>
        </div>

    </div>
    <Outlet/>
    </div>
  )
}

export default NavBar