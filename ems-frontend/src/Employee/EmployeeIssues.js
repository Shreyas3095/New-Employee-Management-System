import React, { useState } from 'react'

export default function EmployeeIssues() {
  const [toggle, setToggle] = useState(false);

  const handleAddIssue = () => {
    setToggle(true);
  }
  const handleFormSubmit = () => {
    setToggle(false);
  }
  return (
    <div>
      <div class="text-left">
        <button className='btn btn-primary' type='button' onClick={handleAddIssue}>Add Issue</button>
      </div>
      <div>
        {toggle?
        <div>
          <form class="form-signin">
            <label htmlFor='type'>Select Issue type</label>
            <select id='type'>
              <option value="select">Select Issue</option>
              <option value="Dispute">Dispute</option>
              <option value="Technical">Technical</option>
              <option value="Transport">Transport</option>
              <option value="Infrastructural">Infrastructural</option>
            </select>
            <label htmlFor='desc'>Description</label>
            <input type="text" id='desc'></input>
            <button className='btn btn-primary' onClick={handleFormSubmit}>Submit</button>
          </form>
        </div>
        :
        <></>}
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Leave Id</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Type</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td><button type='button' className='btn btn-primary'>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
