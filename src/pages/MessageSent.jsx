import React from 'react'
import img1 from "../assets/Group (5).png"
import img2 from "../assets/Vector (26).png"
import { Link } from 'react-router-dom'

const MessageSent = () => {
  return (
    
    <div className=''>
      <div className='bg-dark text-white '>
     <section className='' style={{marginLeft:"27rem"}}>
      <Link to="/contacts"><img src={img2} alt="" style={{marginLeft:"48rem", marginTop:"2rem"}}/></Link>

      <img src={img1} alt="" style={{marginLeft:"9rem", marginTop:"3rem"}} />
      
      <h1 style={{fontFamily:"Hammersmith One", color:"#FFFFFF", marginLeft:"4rem",marginTop:"2rem"}}>Message Sent!</h1>
      <p className='w-50' style={{fontFamily:"lato",color:"#B5B5B5", fontSize:"15px", marginTop:"1rem"}}>Thank you for reaching out, a response will be sent shortly. In <p className='ms-4'>the meantime, kindly check projects I’ve worked on.</p></p>
      <div>
        <Link to="/Projects">
        <button className='p-2 ' style={{color:"#292727", background:"#D9D9D9",border:"none",borderRadius:"0.3rem", width:"14rem",marginBottom:"8rem",marginLeft:"6rem", marginTop:"0.8rem"}}>Go to Projects</button>
        </Link>
      </div>
     </section>
      </div>
    </div>
  )
}

export default MessageSent