import axios from 'axios';
import React, { useState } from 'react'

export default function EditProfile() {
  const empString = sessionStorage.getItem("empString");
  const emp = JSON.parse(empString);
  const [firstName, setFirstName] = useState(emp.firstName);
  const [lastName, setLastName] = useState(emp.lastName);
  const [address, setAddress] = useState(emp.address);
  const [phone, setPhone] = useState(emp.phone);
  const [status, setStatus] = useState(false);

  function updateSessionObject(){
      emp.employee_id = emp.employee_id;
      emp.address = address;
      emp.email = emp.email;
      emp.firstName = firstName;
      emp.lastName = lastName;
      emp.password = emp.password;
      emp.phone = phone;
      emp.role = emp.role;
      const updatedEmpString = JSON.stringify(emp);
      sessionStorage.setItem('empString', updatedEmpString);
  }

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    const updatedemp = {firstName : firstName,
                  lastName : lastName,
                  address : address,
                  phone : phone}
    axios.put(`http://localhost:8000/employee/updateemployee/${emp.employee_id}`,updatedemp)
    .then(response=>{
        const emp = response.data
        console.log(emp);
        alert(
          "Profile updated successfully"
        )
        setStatus(true);
    })
    .catch(error=>{console.log(error);})
    updateSessionObject();
  }
  return (
    <div>
      {status?<div><h5>Profile Saved</h5></div>
      :
      <form>
        <div class="mb-3 w-25">
          <label for="firstname" class="form-label">First Name</label>
          <input type="text" class="form-control" id="firstname" placeholder={emp.firstName} 
            value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}
          />
        </div>
        <div class="mb-3 w-25">
          <label for="lastname" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="lastname" placeholder={emp.lastName}
            value={lastName} onChange={(e)=>{setLastName(e.target.value)}}
            />
        </div>
        <div class="mb-3 w-25">
          <label for="address" class="form-label">Address</label>
          <input type="text" class="form-control" id="address" placeholder={emp.address}
            value={address} onChange={(e)=>{setAddress(e.target.value)}}
          />
        </div>
        <div class="mb-3 w-25">
          <label for="phone" class="form-label">Phone</label>
          <input type="text" class="form-control" id="phone" placeholder={emp.phone}
            value={phone} onChange={(e)=>{setPhone(e.target.value)}}
          />
        </div>
        <div class="mb-3 w-25">
          <button type='submit' class="btn btn-primary" onClick={handleOnSubmit}>Save</button>
        </div>
      </form>}
    </div>
  )
}
