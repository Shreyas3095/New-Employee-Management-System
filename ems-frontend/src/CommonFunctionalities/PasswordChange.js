import React, { useState } from 'react'
import axios from 'axios';

export default function PasswordChange(props) {
  const EmpObject = props.object;
  console.log(EmpObject);
  const [newpassword, setNewPassword] = useState("");
  const [reenterpassword, setReEnterPassword] = useState();
  const [status, setStatus] = useState(false);

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    axios.put('http://localhost:8000/employee/updatepassword/',EmpObject.emp)
    .then(response=>{
        const emp = response.data
        console.log(emp);
        alert(
          "Password updated successfully"
        )
        setStatus(true);
    })
    .catch(error=>{console.log(error);})
  }
  return (
    <div>
      {status?
      <div>
      <h5 className='text-primary'>Password Saved </h5>
      </div>
      :
      <div>
          <div class="mb-3 w-25">
          <label for="newpassword" class="form-label">Enter new password</label>
          <input type="text" class="form-control" id="newpassword"
            value={newpassword} onChange={(e)=>{setNewPassword(e.target.value)}}
          />
        </div>
        <div class="mb-3 w-25">
          <label for="reenterpassword" class="form-label">Re-enter password</label>
          <input type="text" class="form-control" id="reenterpassword"
            value={reenterpassword} onChange={(e)=>{setReEnterPassword(e.target.value)}}
          />
        </div>
        <div class="mb-3 w-25">
          <button type='submit' class="btn btn-primary" onClick={handleOnSubmit}>Save</button>
        </div>
        </div>}
        
        
    </div>
  )
}
