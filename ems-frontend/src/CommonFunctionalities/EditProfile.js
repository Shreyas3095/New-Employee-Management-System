import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function EditProfile(props) {
  const EmpObject = props.object;
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(EmpObject.emp.firstName);
  const [lastName, setLastName] = useState(EmpObject.emp.lastName);
  const [address, setAddress] = useState(EmpObject.emp.address);
  const [phone, setPhone] = useState(EmpObject.emp.phone);
  const [status, setStatus] = useState(false);

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    const emp = {firstName : firstName,
                  lastName : lastName,
                  address : address,
                  phone : phone}
    axios.put(`http://localhost:8000/employee/updateemployee/${EmpObject.emp.employee_id}`,emp)
    .then(response=>{
        const emp = response.data
        console.log(emp);
        alert(
          "Profile updated successfully"
        )
        setStatus(true);
    })
    .catch(error=>{console.log(error);})
  }
  return (
    <div>
      {status?<div><h5>Profile Saved</h5></div>
      :
      <form>
        <div class="mb-3 w-25">
          <label for="firstname" class="form-label">First Name</label>
          <input type="text" class="form-control" id="firstname" placeholder={EmpObject.emp.firstName} 
            value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}
          />
        </div>
        <div class="mb-3 w-25">
          <label for="lastname" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="lastname" placeholder={EmpObject.emp.lastName}
            value={lastName} onChange={(e)=>{setLastName(e.target.value)}}
            />
        </div>
        <div class="mb-3 w-25">
          <label for="address" class="form-label">Address</label>
          <input type="text" class="form-control" id="address" placeholder={EmpObject.emp.address}
            value={address} onChange={(e)=>{setAddress(e.target.value)}}
          />
        </div>
        <div class="mb-3 w-25">
          <label for="phone" class="form-label">Phone</label>
          <input type="text" class="form-control" id="phone" placeholder={EmpObject.emp.phone}
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
