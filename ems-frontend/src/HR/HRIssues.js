import React, { useState,useEffect } from 'react'
import axios from 'axios';


export default function HRIssues() {
  
  const [allIssues, setAllIssues] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/issue/getall")
    .then(response=>{
      setAllIssues(response.data)
      console.log("set = ",allIssues);
    })
    },[])
    
  return (
    <div>
      <h3>Employee Issues</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            allIssues.map(issue=>{
              <tr key={issue.issue_id}>
              <td>{issue.issue_id}</td>
              <td>{issue.employee.firstName}</td> 
              <td>{issue.title}</td>
              <td>{issue.description}</td>
              <td><button type='button' className='btn btn-primary'>Mark as read</button>
            </td>
          </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
