import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import NavBar from '../NavigationBar/NavBar';

export default function SignUp() {
  const [employee_id, setEmployee_id] = useState();
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState();
    const navigate = useNavigate();
    const handleOnClick = (e)=>{
      e.preventDefault();
        axios.post("http://localhost:8000/login/setpassword",{employee_id,password})
        .then(response=>{
          const emp = response.data
          navigate("/employeesidebar",{state:{emp}});
        }).catch(error=>{console.log(error);})
    }
  return (
    <>
    <NavBar></NavBar>
    <main class="form-signin">
    <form>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="text" class="form-control" id="employeeid" placeholder="provided in email"
        value={employee_id} onChange={(e)=>{setEmployee_id(e.target.value)}}
      />
      <label for="employeeid">Employee ID</label>
    </div>
    <small className='text-primary'>Employee id is provided on registered email id</small>
    <div class="form-floating">
      <input type="password" class="form-control" id="password" placeholder="Password"
        value={password} onChange={(e)=>{setPassword(e.target.value)}}
      />
      <label for="password">New Password</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="repassword" placeholder="Password"
        value={repassword} onChange={(e)=>{setRepassword(e.target.value)}}
      />
      <label for="repassword">Re-enter password</label>
    </div>
    <div>{password === repassword ? <p className='text-success'>Entered Password matches</p> : <p className='text-danger'>Entered Password does not matches</p>}</div>
    <button class="w-100 btn btn-lg btn-primary form-button" type="submit" onClick={handleOnClick}>Sign up</button>
  </form>
  </main>
  </>
  )
}

