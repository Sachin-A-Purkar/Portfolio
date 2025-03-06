import React from 'react'
import "./Contact.css"

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  
  return (
    <div className='ng'>
      <div className='row ro1' >
        <h1 className='heading2 rc'>Contact</h1>
      </div>
      <div className='row ro2'>
        <div className='col bo1'>
			<div className='pa'>
            <h1 className='heading3'>Get in touch</h1>
			<br/>
            <p className='para2'>Fill in the form to start a conversation</p><br/>
			<div className='con1'>
				<p className='cona'>
					<FaLocationDot/>Kewal Park ,Ambad,Nashik
				</p>
				<br/>
				<p className='cona'>
					<FaPhoneAlt/>
					+91 9021551522
				</p>
				<br/>
				<p className='cona'>
					<MdEmail/>
					sachinpurkar0001@gmail.com
				</p>
			</div>
        </div>
		</div>
        <div className='col bo2'>
		<form  className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 f1">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="Name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100"/>
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="Email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100"/>
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100"></textarea>
			</label>
			<button type="button" className="btn btn-primary mt-3 w-24 ">Submit</button>
		</form>
		</div>
      </div>

    </div> 
  )
}


