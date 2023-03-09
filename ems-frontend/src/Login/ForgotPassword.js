import axios from 'axios';
import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavigationBar/NavBar';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const handleSendOTP = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/forgot/verify", { email })
      .then(response => console.log(response.status))
      .catch(error => console.log(error))
  }
  const handleOnClick = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8000/forgot/otp/${otp}`)
      .then(response => {
        alert(
          "Password reset successfull. You will be redirected to signup page"
        )
        navigate("/signup");
      })
      .catch(error => {
        alert(
          "OTP does not match. Try again"
        )
        navigate("/forgotpassword")
      })
  }

  return (
    <>
      <NavBar></NavBar>
      <div className='mt-5 row d-flex justify-content-center'>
        <div className="card col-md-6">
          <div className="card-header h5 text-white bg-primary collg-6">Forgot Your Password</div>
          <div className="card-body px-5">
            <p className="card-text py-2">
              Enter your email address and we'll send you an email with instructions to reset your password.
            </p>
            <div className="form-outline">
              <input type="email" id="email" className="form-control my-3" name='username'
               value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Registered Email' />

            </div>
            <a className="btn btn-primary w-100 col-lg-6" id="sendotp" onClick={handleSendOTP}>Send OTP</a>
            {/* This division for verify ONE TIME PASSWORD */}
            <div className="form-outline">
              <input type="password" id="otp" className="form-control my-3" name='otp'
                value={otp} onChange={(e)=>{setOtp(e.target.value)}} placeholder='Enter OTP here' />

            </div>
            <a className="btn btn-primary w-100 col-lg-6" id='otp' onClick={handleOnClick}>Verify OTP</a>
          </div>

        </div>
      </div>

      {/* <div class="form-signin mt-5">
        <div class="form-floating">
      <input type="email" id="email" class="form-control"
        value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <label htmlFor="email">Enter Your Email ID</label>
        </div>
        <div>
      <button type='button' class="w-50 btn btn-lg btn-primary form-button" 
      id="sendotp" onClick={handleSendOTP}>Send OTP</button>
        </div>
        <div class="form-floating mt-2">
      <input type="password" id="verifyotp" class="form-control"
        value={otp} onChange={(e)=>{setOtp(e.target.value)}}/>
      <label htmlFor="verifyotp">Enter Received OTP</label>
        </div>
        <div>
      <button type='button' class="w-50 btn btn-lg btn-primary form-button" id="otp" onClick={handleOnClick}>Verify OTP</button>
        </div>
    </div> */}
    </>
  )
}

