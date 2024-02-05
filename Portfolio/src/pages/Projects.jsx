import React from "react";
import "../style/Projects.css";
import img1 from "../assets/my picture.jpg"
import img2 from "../assets/Group 11.png";
import img3 from "../assets/Vector (19).png";
import img4 from "../assets/Vector (20).png";
import { Link } from "react-router-dom";
import img5 from "../assets/Vector (21).png";

const Projects = () => {
  return (
    <div className="">
      <div className="d-flex justify-content-between bg-dark text-white ">
        <div className=" w-100 ms-5 position-">
          <div className=" sticky-top">
            <Link className="text-white text-decoration-none mt-3" to="/">
              <h4 className="mt-3">FAVDEVS.</h4>
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
              </p>{" "}
            </div>
          </section>

          <div className="d-flex my-5 ">
            <ul className="container list-unstyled ">
              <Link t0="/projects" className="text-decoration-none text-white"><li> 01 ___ Projects </li></Link>
              <Link to="/DownloadResume" className="text-decoration-none"><li style={{color: "#B5B5B5"}}>02 ___ Download Resume</li></Link>
              <Link to="/contacts" className="text-decoration-none"><li style={{color: "#B5B5B5"}}>03 ___ Contacts</li></Link>
            </ul>
          </div>
          <div className="d-flex align-items-right ">
            <section className="container  ">

              <div className=" d-flex gap-5 ">
                <img className="h-75 " style={{width:"3rem"}} src={img1} alt="" />
                  
                     <div>
                     <div className="d-flex gap-2 mt-2 " style={{color:"#B5B5B5"}}>
                 <img className=" h-25 mt-1" src={img2} alt="" />
                  <h5>Email Me</h5>
                  <img className="h-25 mt-1 " src={img3} alt="" />
                </div>
                     </div>

                
                    
                        <div className="">
                        <Link to='https://github.com/favdes' className="d-flex text-decoration-none gap-2" style={{color:"#B5B5B5"}}>
                        <img className="h-25 mt-1" src={img4} alt="" />
                        <h5>Github</h5>
                        <img className="h-25 mt-1" src={img3} alt="" />
                  
                        </Link> 
                        </div>
                    

                </div>
            </section>
          </div>
        </div>

        <div className="container mt-5">
          <div className="d-flex gap-5">
          <section className="projects ">
            <div className=" container ">
              <h6 className="p1">Javascript,React & node</h6>
              <h3 className="p2 ">Shopping Cart</h3>
              <div className="p3 d-flex">
                <Link to="https://github.com/favdes/shopping-cart" className="contact text-decoration-none">
                <div className="container git contact  d-flex">
                  <img className="p4 " src={img4} alt="" />
                  <h6 className="p4 d-flex align-items-center">Github</h6>
                  <img className="p4 " src={img3} alt="" />
                </div>
                </Link>
                 
                 <Link to="https://shopping-cart-gilt-seven.vercel.app/" className="contact text-decoration-none">
                 <div className=" git contact  d-flex  ">
                  <img className="p4  " src={img5} alt="" />
                  <h6 className="p4 d-flex align-items-center">Website</h6>
                  <img className=" p4 " src={img3} alt="" />
                </div>
                 </Link>
              </div>
            </div>
          </section>

          <section className="projects">
            <div className=" container ">
              <h6 className="p1">React & Node</h6>
              <h3 className="p2 ">Ecommerce Front Website</h3>
              <div className="p3 d-flex">
                <Link to="https://github.com/favdes/ecommercefront" className="contact text-decoration-none">
                <div className="container git contact  d-flex">
                  <img className="p4 " src={img4} alt="" />
                  <h6 className="p4 d-flex align-items-center">Github</h6>
                  <img className="p4 " src={img3} alt="" />
                </div>
                </Link>

                <Link to="https://ecommercefront-zeta.vercel.app/" className="contact text-decoration-none">
                <div className=" git contact  d-flex  ">
                  <img className="p4  " src={img5} alt="" />
                  <h6 className="p4 d-flex align-items-center">Website</h6>
                  <img className=" p4 " src={img3} alt="" />
                </div>
                </Link>
              </div>
            </div>
          </section>
          </div>
         <div className="d-flex gap-5 mt-5">
         <section className="projects ">
            <div className=" container ">
              <h6 className="p11">Javacript, React & Node</h6>
              <h3 className="p2 ">TASK Manager Website</h3>
              <div className="p3 d-flex">
                 <Link to="https://github.com/favdes/My-Frontend-Project" className="contact text-decoration-none">
                 <div className="container git contact  d-flex">
                  <img className="p4 " src={img4} alt="" />
                  <h6 className="p4 d-flex align-items-center">Github</h6>
                  <img className="p4 " src={img3} alt="" />
                </div>
                 </Link>

                <Link to="https://my-frontend-project-gamma.vercel.app/" className="contact text-decoration-none">
                <div className=" git contact  d-flex  ">
                  <img className="p4  " src={img5} alt="" />
                  <h6 className="p4 d-flex align-items-center">Website</h6>
                  <img className=" p4 " src={img3} alt="" />
                </div>
                </Link>
              </div>
            </div>
          </section>

          <section className="projects">
            <div className=" container ">
              <h6 className="p11">Javacript</h6>
              <h3 className="p2 ">NEWSLETTER SignUP</h3>
              <div className="p3 d-flex">
               <Link to="https://github.com/favdes/newslettersignup" className="contact text-decoration-none">
               <div className="container git contact  d-flex">
                  <img className="p4 " src={img4} alt="" />
                  <h6 className="p4 d-flex align-items-center">Github</h6>
                  <img className="p4 " src={img3} alt="" />
                </div>
               </Link>
                
                <Link to="https://vercel.com/favdevs/newslettersignup" className="contact text-decoration-none">
                <div className=" git contact  d-flex  ">
                  <img className="p4  " src={img5} alt="" />
                  <h6 className="p4 d-flex align-items-center">Website</h6>
                  <img className=" p4 " src={img3} alt="" />
                </div>
                </Link>
              </div>
            </div>
          </section>
         </div>
         
         <div className="d-flex gap-5 mt-5">
         <section className="projects ">
            <div className=" container ">
              <h6 className="p1">BOOTSTRAP & CSS</h6>
              <h3 className="p2 ">RemoteWork Website</h3>
              <div className="p3 d-flex">
                <Link to="https://github.com/favdes/Remotework" className="contact text-decoration-none">
                <div className="container git contact  d-flex">
                  <img className="p4 " src={img4} alt="" />
                  <h6 className="p4 d-flex align-items-center">Github</h6>
                  <img className="p4 " src={img3} alt="" />
                </div>
                </Link>
                   
                   <Link to="https://remotework-five.vercel.app/" className="contact text-decoration-none">
                   <div className=" git contact  d-flex  ">
                  <img className="p4  " src={img5} alt="" />
                  <h6 className="p4 d-flex align-items-center">Website</h6>
                  <img className=" p4 " src={img3} alt="" />
                </div>
                   </Link>
              </div>
            </div>
          </section>

          <section className="projects">
            <div className=" container ">
              <h6 className="p11">React & Node</h6>
              <h3 className="p2 ">POSTIT - Blog Website</h3>
              <div className="p3 d-flex">
               <Link to="https://github.com/favdes/NEWHOMEPAGE"className="contact text-decoration-none">
               <div className="container git contact  d-flex">
                  <img className="p4 " src={img4} alt="" />
                  <h6 className="p4 d-flex align-items-center">Github</h6>
                  <img className="p4 " src={img3} alt="" />
                </div>
               </Link>
                 
                 <Link to="https://newhomepage-two.vercel.app/"className="contact text-decoration-none">
                 <div className=" git contact  d-flex  ">
                  <img className="p4  " src={img5} alt="" />
                  <h6 className="p4 d-flex align-items-center">Website</h6>
                  <img className=" p4 " src={img3} alt="" />
                </div>
                 </Link>
              </div>
            </div>
          </section>
         </div>

         <div className="d-flex gap-5 mt-5">
         <section className="projects ">
            <div className=" container ">
              <h6 className="p1">Javacript, React & Node</h6>
              <h3 className="p2 ">FARMA -E-commerce Website</h3>
              <div className="p3 d-flex">
                <Link to="https://github.com/favdes/GitUserSearch"className="contact text-decoration-none">
                <div className="container git contact  d-flex">
                  <img className="p4 " src={img4} alt="" />
                  <h6 className="p4 d-flex align-items-center">Github</h6>
                  <img className="p4 " src={img3} alt="" />
                </div>
                </Link>
                
                <Link to="https://git-user-search-ashen.vercel.app/"className="contact text-decoration-none">
                <div className=" git contact  d-flex  ">
                  <img className="p4  " src={img5} alt="" />
                  <h6 className="p4 d-flex align-items-center">Website</h6>
                  <img className=" p4 " src={img3} alt="" />
                </div>
                </Link>
              </div>
            </div>
          </section>

          <section className="projects">
            <div className=" container ">
              <h6 className="p1">React & Node</h6>
              <h3 className="p2 ">POSTIT - Blog Website</h3>
              <div className="p3 d-flex">
                <Link to="https://github.com/favdes/MyPost"className="contact text-decoration-none">
                <div className="container git contact  d-flex">
                  <img className="p4 " src={img4} alt="" />
                  <h6 className="p4 d-flex align-items-center">Github</h6>
                  <img className="p4 " src={img3} alt="" />
                </div>
                </Link>

                   <Link to="" className="contact text-decoration-none">
                   <div className=" git contact  d-flex  ">
                  <img className="p4  " src={img5} alt="" />
                  <h6 className="p4 d-flex align-items-center">Website</h6>
                  <img className=" p4 " src={img3} alt="" />
                </div>
                  </Link>
              </div>
            </div>
          </section>
         </div>

         <div className="d-flex gap-5 mt-5">
         <section className="projects ">
            <div className=" container ">
              <h6 className="p11">Javacript, React & Node</h6>
              <h3 className="p2 ">FARMA -E-commerce Website</h3>
              <div className="p3 d-flex">
                <Link to="" className="contact text-decoration-none">
                <div className="container git contact  d-flex">
                  <img className="p4 " src={img4} alt="" />
                  <h6 className="p4 d-flex align-items-center">Github</h6>
                  <img className="p4 " src={img3} alt="" />
                </div>
                </Link>
                    
                  <Link to=""className="contact text-decoration-none">
                  <div className=" git contact  d-flex  ">
                  <img className="p4  " src={img5} alt="" />
                  <h6 className="p4 d-flex align-items-center">Website</h6>
                  <img className=" p4 " src={img3} alt="" />
                </div>
                  </Link>
              </div>
            </div>
          </section>

          <section className="projects">
            <div className=" container ">
              <h6 className="p11">React & Node</h6>
              <h3 className="p2 ">POSTIT - Blog Website</h3>
              <div className="p3 d-flex">
                <div className="container git contact  d-flex">
                  <img className="p4 " src={img4} alt="" />
                  <h6 className="p4 d-flex align-items-center">Github</h6>
                  <img className="p4 " src={img3} alt="" />
                </div>
                <div className=" git contact  d-flex  ">
                  <img className="p4  " src={img5} alt="" />
                  <h6 className="p4 d-flex align-items-center">Website</h6>
                  <img className=" p4 " src={img3} alt="" />
                </div>
              </div>
            </div>
          </section>
         </div>

         <div className="d-flex gap-5 mt-5">
         <section className="projects ">
            <div className=" container ">
              <h6 className="p1">Javacript, React & Node</h6>
              <h3 className="p2 ">FARMA -E-commerce Website</h3>
              <div className="p3 d-flex">
                <div className="container git contact  d-flex">
                  <img className="p4 " src={img4} alt="" />
                  <h6 className="p4 d-flex align-items-center">Github</h6>
                  <img className="p4 " src={img3} alt="" />
                </div>
                <div className=" git contact  d-flex  ">
                  <img className="p4  " src={img5} alt="" />
                  <h6 className="p4 d-flex align-items-center">Website</h6>
                  <img className=" p4 " src={img3} alt="" />
                </div>
              </div>
            </div>
          </section>

          <section className="projects mb-5">
            <div className=" container ">
              <h6 className="p11">React & Node</h6>
              <h3 className="p2 ">POSTIT - Blog Website</h3>
              <div className="p3 d-flex">
                <div className="container git contact  d-flex">
                  <img className="p4 " src={img4} alt="" />
                  <h6 className="p4 d-flex align-items-center">Github</h6>
                  <img className="p4 " src={img3} alt="" />
                </div>
                <div className=" git contact  d-flex  ">
                  <img className="p4  " src={img5} alt="" />
                  <h6 className="p4 d-flex align-items-center">Website</h6>
                  <img className=" p4 " src={img3} alt="" />
                </div>
              </div>
            </div>
          </section>
         </div>
        </div>
        

        
      </div>
    </div>
  );
};

export default Projects;
