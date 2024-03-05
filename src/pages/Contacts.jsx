
import img1 from "../assets/my picture.jpg";
import img2 from "../assets/Group 11.png";
import img3 from "../assets/Vector (19).png";
import img4 from "../assets/Vector (20).png";
import { Link } from "react-router-dom";
import "../style/Contacts.css";
import MessageSentModal from "../component/MessageSentModal";
import DownloadModal from "../component/DownloadModal";

const Contacts = () => {
  // const handleMessage = (e)=>{
  //   e.preventDefault()
  // }

  return (
    <div className="">
      <div className="d-lg-flex justify-content-between bg-black text-white">
        <div className=" ">
          <div className="">
            <Link className="text-white text-decoration-none" to="/">
              <h4 className=" navbar">FAVDEVS.</h4>
            </Link>
          </div>

          <section className="main">
            <div className=" container  ">
              <button className="a bg-white ms-lg-3" style={{ border: "none", fontSize: "1.8rem" }}>
                Full Stack Developer
              </button>
              <h5 className="b text-white mt-4" style={{ fontSize: "3.9rem", }}>
                Favour Echiejile
              </h5>
              <p className="p ms-3  " style={{ fontSize: "1.5rem" }}>
                CAREER OBJECTIVES : To work with existing staff, facilities and
                ensure business objectives are achieved. Secondly, to use my
                skills to contribute immensely to the growth of any
                establishment through hard work, commitment and the drive for
                excellence even as I grow forward and upward in my career.
              </p>
            </div>
          </section>

          <div className="main d-lg-flex ms-3 mt-4 route">
            <ul className="container list-unstyled ">
              <Link to="/projects " className="text-decoration-none">
                <li style={{ color: "#B5B5B5" }}> <h4>01 ___ Projects </h4></li>
              </Link>
              <li className="d-flex" style={{ color: "#B5B5B5" }}>
                <h4 className="d-flex">02 ___<DownloadModal/></h4>
              </li>
              <Link to="/Contacts " className="text-decoration-none text-white">
                <li><h5>03 ___Contact</h5></li>
              </Link>
            </ul>
          </div>
          <div className="man d-lg-flex align-items-right  ">
            <section className="ms-1 ">
              <div className="contact d-flex align-items-center gap-5  pb-4">
              <img
              className="pic rounded-5 mb-2 "
              style={{ width: "3rem",marginTop:"2rem" }}
              src={img1}
              alt=""
            />
               
              <div>
                  <div className="contact d-flex gap-2 mt-4">
                    <img className="gh1 h-25 mt-1 ps-lg-4" src={img2} alt="" />
                    Email Me
                    <img className="h-25 mt-1" src={img3} alt="" />
                  </div>
                </div>

                <div className="Gh">
                  <Link
                    to="https://github.com/favdes"
                    className="contact text-decoration-none d-flex gap-2 mt-3"
                    style={{ color: "#B5B5B5" }}
                  >
                    <img className=" h-25 mt-1" src={img4} alt="" />
                    Github
                    <img className="h-25 mt-1" src={img3} alt="" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="container mt-5 info mass">
          <form className="container mass" action="" style={{ width: "36rem" }}>
            <h1 className=" sm">Send A Message</h1>
            <input
              type="text"
              placeholder="From:"
              style={{ background: "#404040", color: "white" }}
              className="info w-lg-75 my-4 p-2 "
            />

            <input 
              type="text"
              placeholder="Subject:"
              style={{ background: "#404040", color: "white"}}
              className="info my-2 p-2 mt-3 w-lg-75 "
            />

            <textarea
              className="info my-2 p-2 mt-4 w-lg-75 "
              placeholder="Write Message..."
              style={{
                background: "#404040",
                color: "white",
                height: "15rem",
              }}
            ></textarea>
            <div className="msm  mt-4 pb-5">
              <h4 className="msm"><MessageSentModal /></h4>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Contacts;
