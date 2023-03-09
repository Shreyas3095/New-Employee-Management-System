import React, { useState } from 'react'
import NavBar from '../NavigationBar/NavBar'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

export default function Login(){
  
  const [employee_id, setEmployee_id] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSignIn = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8000/login/getemployee",{employee_id,password})
    .then(response=>{ 
      const empString = JSON.stringify(response.data)
      console.log("empString = ",empString);
      sessionStorage.setItem('empString',empString);
    if( response.data.role === "HR")
    {
      navigate('/hrsidebar')
    }
    else
    {
      navigate('/employeesidebar')
    }}).catch(error=>{console.log(error);})

  }
  const handleSignUp = ()=>{
    navigate("/signup")
  }
  const handleForgotPassword = ()=>{
    navigate("/forgotpassword")
  }
  return (
    <>
    <div>
        <NavBar></NavBar>
    </div>
    <main className="form-signin">
    <form>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="text" className="form-control" id="employeeid" placeholder="provided in email"
        value={employee_id} onChange={(e)=>{setEmployee_id(e.target.value)}}
      />
      <label htmlFor="employeeid">Enter Your Email</label>
    </div>
    <div className="form-floating mt-2">
      <input type="password" className="form-control" id="password" placeholder="Password"
        value={password} onChange={(e)=>{setPassword(e.target.value)}}
      />
      <label htmlFor="password">Enter Your Password</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary form-button" type="submit" onClick={handleSignIn}>Sign in</button>
    <button className="w-100 btn btn-lg btn-primary form-button" type="submit" onClick={handleSignUp}>Sign up</button>
    <button className="w-100 btn btn-lg btn-primary form-button" type="submit" onClick={handleForgotPassword}>Forgot password</button>
  </form>
  </main>
    </>
  )
}

