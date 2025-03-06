import React from 'react'
import "./Home.css"
import { FaInstagram,FaLinkedin,FaGithub,FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Home(props) {
  return (
    <div className='ho1'>
      <div className='hb1'>
      <h1 className='t1'>Hello, I'm</h1><br/>
      <h1 className='t2'>Sachin Purkar</h1><br/>
      <h2> Full Stack Developer</h2><br/>
      <div className='soc'>
      <div className='col'><a href='https://www.linkedin.com/in/sachin-purkar-131566289/'><FaLinkedin style={{color: "#0a66c2",}} className='ic'/></a></div>
      <div className='col'><a href='https://github.com/Sachin-A-Purkar'><FaGithub  className='ic'/></a></div>
      <div className='col'><a href='https://wa.me/9021551522'><FaWhatsappSquare style={{color: "#33ff4f",fontSize: "40px"}} className='ic'/></a></div>
      <div className='col'><a href='mailto:sachinpurkar0001@gmail.com'><MdEmail style={{color: "#0a66c2",fontSize: "40px"}} className='ic'/></a></div>
      <div className='col'><a href='https://www.instagram.com/sachin_.96k._?utm_source=qr'><FaInstagram style={{color: "#ff00a2",fontSize: "40px"}} className='ic'/></a></div>
      </div>
      <div className='don'>
        <a href='https://drive.google.com/file/d/1i8f9vpFJwhX4l26Qve6mn0ha5rcUj1fU/view?usp=drivesdk' ><div className="btn btn-primary mt-3 w-1 "id='but'>Download Resume</div></a>
        
      </div>
      </div>
      
    </div>
  )
}
