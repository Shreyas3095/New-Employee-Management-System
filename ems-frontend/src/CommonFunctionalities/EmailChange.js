import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function EmailChange(props) {
  const EmpObject = props.object
  const [email, setEmail] = useState(EmpObject.emp.email);
  const [status, setStatus] = useState(false);

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    axios.put('http://localhost:8000/employee/updateemail/',EmpObject.emp)
    .then(response=>{
        const emp = response.data
        console.log(emp);
        alert(
          "Email id updated successfully"
        )
        setStatus(true);
    })
    .catch(error=>{console.log(error);})
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
