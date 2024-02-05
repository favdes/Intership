import React from 'react'
import img1 from "../assets/my picture.jpg"
import img2 from "../assets/Group 11.png"
import img3 from "../assets/Vector (19).png"
import img4 from "../assets/Vector (20).png"
import { Link } from 'react-router-dom';
import "../style/Contacts.css"


const Contacts = () => {
  return (
    <div>
       <div className='d-lg-flex justify-content-between bg-dark text-white'>
       <div className=" w-100 ms-5 ">
          <div className=" sticky-top">
            <Link className="text-white text-decoration-none " to="/">
              <h4 className='mt-4'>FAVDEVS.</h4>
            </Link>
          </div>

          <section className="">
            <div className=" container mt-5 pt-5 ">
              <button className="a bg-white mt-5 " style={{ border: "none" }}>
                Full Stack Developer
              </button>
              <h5 className="b text-white mt-4">Favour Echiejile</h5>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                pha tortor consequat nibh gravida id sit. Quis eget diam ut
                proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet
                dis eros dolor eget. Orci in enim sit luctus lacus arcu.
              </p>
            </div>
          </section>

          <div className="d-flex my-5 ">
            <ul className="container list-unstyled ">
              <Link to="/projects " className='text-decoration-none'><li style={{color: "#B5B5B5"}}> 01 ___ Projects </li></Link>
              <Link to="/DownloadResume" className='text-decoration-none'><li style={{color: "#B5B5B5"}}>02 ___ Download Resume</li></Link>
              <Link to="/Contacts " className='text-decoration-none text-white'><li>03 ___ Contact</li></Link>
            </ul>
          </div>
          <div className="d-flex align-items-right ">
            <section className="container sticky-top ">

              <div className="contact d-flex align-items-center gap-5 mt-3 pb-4">
                <img className="h-75 " style={{width:"3rem"}}  src={img1} alt="" />
                
                <div>
                <div className="contact d-flex gap-2 mt-2">
                 <img className=" h-25 mt-1 " src={img2} alt="" />
                  Email Me
                  <img className="h-25 mt-1" src={img3} alt="" />
                </div>
                </div>
                
                    
                        <div>
                        <Link to='https://github.com/favdes' className="contact text-decoration-none d-flex gap-2" style={{color:"#B5B5B5"}}>
                        <img className="h-25 mt-1" src={img4} alt="" />
                        Github
                        <img className="h-25 mt-1" src={img3} alt="" />
                  
                        </Link>
                        </div>
                         </div>
            </section>
          </div>
         </div>
      
           <div className='container' style={{}}>
           <form className='container' action="" style={{width:"32rem"}}>
         <h1 className='mt-5'>Send A Message</h1>
            <input 
            type="text" 
            placeholder='From:'
            style={{background:"#404040"}}
            className='w-100 my-3 p-2'
            />

            <input 
            type="text" 
            placeholder='Subject:'
            style={{background:"#404040"}}
            className='w-100 my-3 p-2'
            />

            <textarea
            className='w-100 my-3 p-2'
            placeholder='Write Message...'
            style={{background:"#404040", color:"gray", height:"20rem"}} >
                 </textarea>

            <div className='text-center'>
               <Link to="/MessageSent">
               <button className="btn btn-light px-3">
                    Send Message
                </button>
               </Link>
            </div>
         </form>
           </div>
        </div> 
    </div>
  )
}

export default Contacts