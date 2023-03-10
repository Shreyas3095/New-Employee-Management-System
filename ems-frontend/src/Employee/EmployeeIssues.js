import React, { useState,useEffect } from 'react'
import axios from 'axios';

export default function EmployeeIssues() {
  const [toggle, setToggle] = useState(false);
  const [issues, setIssues]= useState([]);
  const[description,setDescription]=useState('');
  const [title , setTitle]=useState('');
  const [employee , setEmployee]=useState({});
  const [status , setStatus]=useState(false);



  useEffect(()=>{
    const temp = sessionStorage.getItem('empString')
    const temp2=JSON.parse(temp);
    setEmployee(temp2);
    console.log(employee);

    axios.get(`http://localhost:8000/issue/getissue/${temp2.employee_id}`)
    .then(response=>
      {
        console.log("useEffect");
        
        const issueString=JSON.stringify(response.data);
        sessionStorage.setItem('issueString',issueString);
        setIssues(response.data)
        console.log(issues)
      })
      .catch(error=>{
        console.log("Event error");
      })

  },[])

  const handleAddIssue = () => {
    setToggle(true);
  }
  const handleFormSubmit = () => {
    setToggle(false);
    axios.post("http://localhost:8000/issue/getissue/addnew",{title,description,status,employee})
    .then(response=>{
      alert("Issue Created Successfully");
      const issueString=sessionStorage.getItem('issueString');
      let issueJson=JSON.parse(issueString);
      let temp=[...issueJson];
      temp.push(response.data);
      setIssues(temp);

    })
  }
  return (
    <div>
      <div class="text-left">
        <button className='btn btn-primary' type='button' onClick={handleAddIssue}>Add Issue</button>
      </div>
      <div>
        {toggle?
        <div>
          <form class="form-sign-in">
            <label htmlFor='title'>Select Issue type</label>
            <select id='title'>
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
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Issue Id</th>
            <th scope="col">Type</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Technical</td>
            <td>Keyboard Not Working</td>
            <td>Pending</td>
            </tr>
            {issues.map(issue=>(
              <tr key={issue.issue_id}>
                <th>{issue.id}</th>
                <td>{issue.title}</td>
                <td>{issue.description}</td>
                <td>{issue.status}</td>
              </tr>
            ))}
        </tbody>

      </table>
    </div>
  )
}