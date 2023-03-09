import axios from 'axios';
import { React,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavigationBar/NavBar';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otp,setOtp] = useState('');
  const navigate = useNavigate();
  const handleSendOTP = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/forgot/verify",{email})
    .then(response=>console.log(response.status))
    .catch(error=>console.log(error))
  }
  const handleOnClick=(e)=>{
    e.preventDefault();
    axios.get(`http://localhost:8000/forgot/otp/${otp}`)
    .then(response=>{
        alert(
          "Password reset successfull. You will be redirected to signup page"
          )
          navigate("/signup");})
    .catch(error=>{
      alert(
        "OTP does not match. Try again"
      )
      navigate("/forgotpassword")})   
    }

  return (
    <>
    <NavBar></NavBar>
    <div class="form-signin">
        <div class="form-floating">
      <input type="email" id="email" class="form-control"
        value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <label htmlFor="email">Email ID</label>
        </div>
        <div>
      <button type='button' class="w-100 btn btn-lg btn-primary form-button" id="sendotp" onClick={handleSendOTP}>Send OTP</button>
        </div>
        <div class="form-floating">
      <input type="password" id="verifyotp" class="form-control"
        value={otp} onChange={(e)=>{setOtp(e.target.value)}}/>
      <label htmlFor="verifyotp">Enter OTP</label>
        </div>
        <div>
      <button type='button' class="w-100 btn btn-lg btn-primary form-button" id="otp" onClick={handleOnClick}>Verify OTP</button>
        </div>
    </div>
    </>
  )
}
