import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function HRLeaves() {
  const[leaves,setLeaves]=useState([]);

  useEffect(()=>
  {
    axios.get("http://localhost:8000/leave/getall")
    .then(response=>{
      const leavesString=JSON.stringify(response.data);
          sessionStorage.setItem('leavesString',leavesString);
      setLeaves(response.data);
      console.log(leaves);
      
    })
  },[])
  return (
    <div>
      <h3>Employee Leaves</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Employee Name</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jhon Doe</td>
            <td>2023-03-11</td>
            <td>2023-03-25</td>
            <td>Sick Leave</td>
            <td><button type='button' className='btn btn-primary'>Approve</button>
            <button type='button' className='btn btn-primary'>Deny</button>
            </td>
          </tr>
          {
            leaves.map(leave=>{
              <tr key={leave.leave_id}>
                <td>{leave.employee.firstName}{leave.employee.lastName}</td>
                <td>{leave.start_date}</td>
                <td>{leave.end_date}</td>
                <td>{leave.type}</td>
                <td><button type='button' className='btn btn-primary'>Approve</button>
            <button type='button' className='btn btn-primary'>Deny</button>
            </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}