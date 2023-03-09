import React, { useState } from 'react'
import NavBar from '../NavigationBar/NavBar'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

export default function Login(){
  const [employee_id, setEmployee_id] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSignIn = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8000/login/getemployee",{employee_id,password})
    .then(response=>{ const emp = response.data
    if( emp.role === "HR")
    {
      navigate('/hrsidebar',{state:{emp}})
    }
    else
    {
      navigate('/employeesidebar',{state:{emp}})
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
    <main class="form-signin">
    <form>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="text" class="form-control" id="employeeid" placeholder="provided in email"
        value={employee_id} onChange={(e)=>{setEmployee_id(e.target.value)}}
      />
      <label htmlFor="employeeid">Employee ID</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="password" placeholder="Password"
        value={password} onChange={(e)=>{setPassword(e.target.value)}}
      />
      <label htmlFor="password">Password</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary form-button" type="submit" onClick={handleSignIn}>Sign in</button>
    <button class="w-100 btn btn-lg btn-primary form-button" type="submit" onClick={handleSignUp}>Sign up</button>
    <button class="w-100 btn btn-lg btn-primary form-button" type="submit" onClick={handleForgotPassword}>Forgot password</button>
  </form>
  </main>
    </>
  )
}
