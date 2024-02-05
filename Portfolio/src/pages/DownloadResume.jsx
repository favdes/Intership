import React from 'react'
import img1 from "../assets/Vector (25).png"
import img3 from "../assets/Vector (26).png"
import { Link } from 'react-router-dom'

const DownloadResume = () => {
  return (
    <div className=''>
      <div className='bg-dark text-white '>
     <section className='' style={{marginLeft:"27rem"}}>
      <Link to="/Projects"><img src={img3} alt="" style={{marginLeft:"48rem", marginTop:"2rem"}}/></Link>

      <img src={img1} alt="" style={{marginLeft:"9rem", marginTop:"3rem"}} />
      <h6 className='mt-3'style={{color:"#F16529", marginLeft:"8rem"}}>Favour's Resume.pdf</h6>
      <h1 style={{fontFamily:"Hammersmith One"}}>Download In Progress!</h1>
      <p style={{fontFamily:"lato",color:"#B5B5B5", fontSize:"15px", marginLeft:"3rem"}}>Kindly check your downloads for the downloaded file.</p>
      <div>
        <Link to="">
        <button className='p-2 ' style={{color:"#292727", background:"#D9D9D9",border:"none",borderRadius:"0.3rem", width:"14rem",marginBottom:"8rem",marginLeft:"6rem"}}>Go to Downloads</button>
        </Link>
      </div>
     </section>
      </div>
    </div>
  )
}

export default DownloadResume