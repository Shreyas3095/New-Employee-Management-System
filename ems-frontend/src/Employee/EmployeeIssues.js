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
    const employee_id=temp2.employee_id;
    console.log((employee_id));

    axios.get(`http://localhost:8000/issue/getissue/${employee_id}`)
    .then(response=>
      {
        console.log("useEffect");
        
        const issueString=JSON.stringify(response.data);
        sessionStorage.setItem('issueString',issueString);
        setIssues(response.data)
        console.log(issues)
      })
      .catch(error=>{
        console.log("Issue error");
      })

  },[])

  function stat  (status)
  {
    if(status)
    {
      return "Solved"
    }
    else{return "Pending"}

  }

  const handleAddIssue = () => {
    setToggle(true);
  }
  const handleFormSubmit = () => {
    const employee_id=employee.employee_id;
    console.log(employee_id);
    axios.post(`http://localhost:8000/issue/addnew/${employee_id}`,{title,description,status,employee})
    .then(response=>{
      alert("Issue Created Successfully");
      axios.get(`http://localhost:8000/issue/getissue/${employee_id}`)
    .then(response=>
      {
        console.log("useEffect");
        console.log(response.data);
        const issueString=JSON.stringify(response.data);
        sessionStorage.setItem('issueString',issueString);
        setIssues(response.data)
        console.log(issues)
      })
      .catch(error=>{
        console.log("Issue error");
      })
      // const issueString=sessionStorage.getItem('issueString');
      // let issueJson=JSON.parse(issueString);
      // let temp=[...issueJson];
      // temp.push(response.data);
      // setIssues(temp);
      
    })
    setToggle(false);
  }
  return (
    <div>
      <div class="text-left">
        <button className='btn btn-primary' type='button' onClick={handleAddIssue}>Add Issue</button>
      </div>
      <div>
        {toggle?
        <div className='mt-5 mb-5 d-flex justify-content-center '>
        <div className='card col-md-5 '>
          <form className="form-sign-in">
            <label htmlFor='title'><b>Select Issue type </b></label>
            <select id='title'
            value={title} onChange={(e)=>{setTitle(e.target.value)}}
            required>
              <option value="select">Select Issue</option>
              <option value="Dispute">Dispute</option>
              <option value="Technical">Technical</option>
              <option value="Transport">Transport</option>
              <option value="Infrastructural">Infrastructural</option>
            </select>
            <div className='mt-4'>
            <label htmlFor='desc'><b>Description</b></label>
            <input type="text" id='desc'
              value={description} onChange={(e)=>{setDescription(e.target.value)}}
                required>

                </input>
                </div>
            <button className='btn btn-primary mt-5 mb-3' onClick={handleFormSubmit}>Submit</button>
          </form>
        </div>
        </div>
        :
        <></>}
      </div >
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Technical</td>
            <td>Keyboard Not Working</td>
            <td>Pending</td>
            </tr>
            {issues.map(issue=>(
              <tr key={issue.issue_id}>
                <td>{issue.title}</td>
                <td>{issue.description}</td>
                <td>{stat(issue.status)}</td>
              </tr>
            ))}
        </tbody>

      </table>
    </div>
  )
}