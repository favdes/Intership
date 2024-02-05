import React from 'react'
// import NavBar from '../layout/NavBar'
import img1 from "../assets/Vector (17).png"
import img2 from "../assets/Group 7 (1).png"
import img3 from "../assets/Group 6 (3).png"
import img4 from "../assets/logos_javascript.png"
import img5 from "../assets/Vector (18).png"
import img6 from "../assets/Group 5 (2).png"
import img7 from "../assets/my picture.jpg"
import img8 from "../assets/Group 11.png"
import img9 from "../assets/Vector (19).png"
import img10 from "../assets/Vector (20).png"
import img11 from "../assets/Saly-13.png"
import "../style/Home.css"

const Home = () => {
  return (
    <>
    <div className=''>
      <main className='container '>
        <div className='d-flex align-items-center justify-content-between '>
        
    <div className='mt-5 pt-5'>
    <button className='a bg-white mt-5 'style={{border:'none'}}>Full Stack Developer</button>
        <h2 className='b text-white mt-4'>Favour Echiejile</h2>

        <p className='p' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p> 
        <div className=' d-flex justify-content-between  p-2 mt-3 w-75' style={{gap:"1.8rem"}}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" /></div>
        
        <div className='contact d-flex align-items-center pb-4'>
        <div className='d-flex w-75 mt-5  pt-5 ' >
          <img className=' 'style={{width:"3rem"}}  src={img7} alt="" />
          <div className=' d-flex justify-content-between mt-2' style={{gap:"0.4rem"}}>
            <img className='mt-1 ' style={{height:"1rem", marginLeft:"1.5rem"}} src={img8} alt="" />  <h5 className=' '>Email Me</h5>
          <img className=' mt-1'style={{height:"1rem"}} src={img9} alt="" /></div> </div>

        <div className=' git contact d-flex justify-content-between mt-4 pt-5'>
          <img className='h-25 mt-3' src={img10} alt="" />
          <h5 className='mt-3'>Github</h5>
          <img className='h-25 mt-3' src={img9} alt="" /></div></div>
        </div>

        <div className=' '  >
          <img src={img11} alt="" style={{ width:"40rem"}}/>
        </div>
        </div>

        

      </main>
    </div>
    </>
  )
}

export default Home