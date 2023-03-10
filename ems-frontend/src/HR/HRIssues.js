import React, { useState,useEffect } from 'react'
import axios from 'axios';



export default function HRIssues() {
  
  const [toggle, setToggle] = useState(false);
  const [issues, setIssues]= useState(JSON.parse(sessionStorage.getItem('issueHRString')));
  const[description,setDescription]=useState('');
  const [title , setTitle]=useState('');
  const [employee , setEmployee]=useState({});
  const [status , setStatus]=useState(false);
  

  
  // useEffect(()=>{
  //   const temp = sessionStorage.getItem('empString')
  //   const temp2=JSON.parse(temp);
  //   setEmployee(temp2);
  //   axios.get("http://localhost:8000/issue/getall")
  //   .then(response=>
  //     {
  //       console.log("useEffect HRIssue");
  //       const issueHRString=JSON.stringify(response.data);
  //       sessionStorage.setItem('issueHRString',issueHRString);
  //       setIssues(response.data)
  //       console.log(response.data)
        
  //     })
  //     .catch(error=>{
  //       console.log("Issue error");
  //     })
    

  // },[])
  
  const handleMarkAsRead= () =>{
  }
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
          <form class="form-sign-in" hidden>
            <label htmlFor='title'>Select Issue type</label>
            <select id='title'
            value={title} onChange={(e)=>{setTitle(e.target.value)}}
            required>
              <option value="select">Select Issue</option>
              <option value="Dispute">Dispute</option>
              <option value="Technical">Technical</option>
              <option value="Transport">Transport</option>
              <option value="Infrastructural">Infrastructural</option>
            </select>
            <label htmlFor='desc'>Description</label>
            
            <input type="text" id='desc'
              value={description} onChange={(e)=>{setDescription(e.target.value)}}
                required>

                </input>
            <button className='btn btn-primary' onClick={handleFormSubmit}>Submit</button>
          </form>
        </div>
        :
        <></>}
      </div> 
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
          <tr>
            <td>1</td>
            <td>Jhon Doe</td>
            <td>Missing</td>
            <td>Not Found</td>
            <td><button type='button' className='btn btn-primary'>Mark as read</button></td>
          </tr>
          {/* {issues.map(issue=>{
              <tr key={issue.issue_id}>
              <td>{issue.issue_id}</td>
              <td>{issue.employee.firstName}</td> 
              <td>{issue.title}</td>
              <td>{issue.description}</td>
              <td><button type='button' className='btn btn-primary' onClick={handleMarkAsRead}>Mark as read</button>
            </td>
          </tr>
            })
          } */}
           
            
        </tbody>
      </table>
    </div>
  )
}
