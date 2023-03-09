import React, { useState } from 'react'
import axios from 'axios';

export default function PasswordChange() {
  const empString = sessionStorage.getItem("empString");
  const emp = JSON.parse(empString);
  const [newpassword, setNewPassword] = useState("");
  const [reenterpassword, setReEnterPassword] = useState();
  const [status, setStatus] = useState(false);
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emp.password = reenterpassword;
    axios.put('http://localhost:8000/employee/updatepassword/', emp)
      .then(response => {
        const emp = response.data
        console.log(emp);
        alert(
          "Password updated successfully"
        )
        setStatus(true);
      })
      .catch(error => { console.log(error); })
  }
  return (
    <>
      <div className='mt-5 row d-flex justify-content-center'>
        <div className='card col-md-5'>
        {status ?
          <div>
            <h5 className='text-primary'>Password Saved </h5>
          </div>
          :
          <div>
            <div className="card-body px-5">
              <label for="newpassword" class="form-label">Enter new password</label>
              <input type="password" className="form-control" id="newpassword"
                value={newpassword} onChange={(e) => { setNewPassword(e.target.value) }}
              />
            </div>
            <div className="card-body px-5">
              <label for="reenterpassword" class="form-label">Re-enter password</label>
              <input type="password" className="form-control" id="reenterpassword"
                value={reenterpassword} onChange={(e) => { setReEnterPassword(e.target.value) }}
              />
            </div>
            <div>
              <button type='submit' className="btn btn-primary mb-2 col-lg-5" onClick={handleOnSubmit}>Save</button>
            </div>
          </div>
        }
        </div>

      </div>
    </>
  )
}
