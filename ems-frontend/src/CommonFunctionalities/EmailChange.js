import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function EmailChange() {
  const empString = sessionStorage.getItem("empString");
  const emp = JSON.parse(empString);
  const [email, setEmail] = useState(emp.email);
  const [status, setStatus] = useState(false);

  function updateSessionObject(){
    emp.employee_id = emp.employee_id;
    emp.address = emp.address;
    emp.email = email;
    emp.firstName = emp.firstName;
    emp.lastName = emp.lastName;
    emp.password = emp.password;
    emp.phone = emp.phone;
    emp.role = emp.role;
    const updatedEmpString = JSON.stringify(emp);
    sessionStorage.setItem('empString', updatedEmpString);
}

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    emp.email = email;
    axios.put('http://localhost:8000/employee/updateemail/',emp)
    .then(response=>{
        const emp = response.data
        console.log(emp);
        alert(
          "Email id updated successfully"
        )
        setStatus(true);
    })
    .catch(error=>{console.log(error);})
    updateSessionObject();
  }
  return (
    <div>
      {status?<div><h5>New Email Saved Successfully</h5></div>
      :
      <form>
        <div class="mb-3 w-25">
          <label for="email" class="form-label">First Name</label>
          <input type="text" class="form-control" id="email" 
            value={email} onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div class="mb-3 w-25">
          <button type='submit' class="btn btn-primary" onClick={handleOnSubmit}>Save</button>
        </div>
      </form>}
    </div>
  )
}
