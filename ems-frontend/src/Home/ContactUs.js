import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavigationBar/NavBar'

export default function ContactUs() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  var msg = "Thankyou for contacting us. We have recieved your message. We will reach you out as soon as possible!"
  const handleOnClick = () => {
    setToggle(true);
    setTimeout(()=>{
      navigate("/")
    },3000)
  }
  return (
    <div>
      <NavBar></NavBar>
      <div className='mt-3'>
        <h3>We would like to hear from you!</h3>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="card" style={{ width: 500, marginTop: 20 }}>
          <div className='card-body'>
            <input type="text" placeholder='Name' className='form-control mb-3'></input>
            <input type="text" placeholder='Email' className='form-control mb-3'></input>
            <textarea type="text" placeholder='Message' className='form-control mb-3'></textarea>
            <button type='button' className='btn btn-primary' onClick={handleOnClick}>Send Mail</button>
          </div>
        </div>
      </div>
      <div>
        {toggle? <div className='btn btn-primary mt-3'>{msg}</div>: <></>}
      </div>
    </div>
  )
}
