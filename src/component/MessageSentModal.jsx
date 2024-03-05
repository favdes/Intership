import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import img1 from "../assets/Group (5).png"
import img2 from "../assets/Vector (26).png"


const MessageSentModal = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) =>{ 
    e.preventDefault()
    setShow(true);
  }



  return (
    <div>
       <h4> <button className='d-flex  px-3 py-1 border border-none rounded'style={{marginLeft:"9rem", color:"#f16529"}} onClick={handleShow}>
            Sent Message
        </button>
</h4>
      <Modal
        show={show}
        onHide={handleClose}
      >
        <div className='bg-dark text-white text-center'>
     <section className='' >
     <div className='d-flex justify-content-end' onClick={()=>handleClose(true)}>
     <img src={img2} alt="" />
     </div>

      <img src={img1} alt=""  />
      
      <h1 style={{fontFamily:"Hammersmith One"}}>Message Sent!</h1>
      <p className='msmj' style={{fontFamily:"lato",color:"#B5B5B5", fontSize:"17px", width:"",marginLeft:"" }}>Thank you for reaching out, a response will be sent shortly. In the meantime, kindly check projects Ive worked on.</p>
     <div>
        <div onClick={()=>handleClose(true)}>
      <button className='p-2 border border-none rounded-2 mb-5' style={{color:"#292727", background:"#D9D9D9"}}>Go to Projects</button>
        </div>
      </div>
     </section>
      </div>
        
      </Modal>
    </div>
  )
}

export default MessageSentModal