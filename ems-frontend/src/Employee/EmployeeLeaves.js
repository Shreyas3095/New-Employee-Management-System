import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function EmployeeLeaves() {
  const [toggle, setToggle] = useState(false);
  const[description,setDescription]=useState('');
  const [type , setType]=useState('');
  const [status , setStatus]=useState(false);
  const[startDate,setStartDate]=useState('');
  const[endDate,setEndDate]=useState('');
  const[leaves,setLeaves]=useState([]);
  const[employee,setEmployee]=useState({})
  
  useEffect(()=>{
    const temp = sessionStorage.getItem('empString')
    const temp2=JSON.parse(temp);
    setEmployee(temp2);
    console.log(employee);

    axios.get(`http://localhost:8000/leave/getleave/${temp2.employee_id}`)
    .then(response=>
      {
        console.log("useEffect");
        
        const leaveString=JSON.stringify(response.data);
        sessionStorage.setItem('leaveString',leaveString);
        setLeaves(...response.data)
        console.log(leaves)
      })
      .catch(error=>{
        console.log("Event error");
      })

  },[])

  
  const handleAddLeave = () => {
    setToggle(true);
  }
  const handleFormSubmit = () => {
    setToggle(false);
    axios.post("http://localhost:8000/leave/addnew",{employee,startDate,endDate,type,status})
  }
  return (
    <div className='container'>
      <div class="text-left">
        <button className='btn btn-primary' type='button' onClick={handleAddLeave}>Add Leave</button>
      </div>
        {toggle ?
          <div>
            <form class="form-sign-in">
              
              <label htmlFor='type'>Select Leave type</label>
              <select id='type' 
               value={type} onClick={(e)=>{setType(e.target.value)}}
               required >
                <option value="select">Sick Leave</option>
                <option value="Dispute">Casual Leave</option>
                <option value="Technical">unPaid Leave</option>
              </select>
              
              <label htmlFor='desc'>Description</label>
              <input type="text" id='desc'
               value={description} onChange={(e)=>{setDescription(e.target.value)}}
               required>
              </input>
              
              <label htmlFor='startDate'>startDate</label>
              <input type="date" id ="startDate"
               value={startDate} onChange={(e)=>{setStartDate(e.target.value)}}
               required>
              </input>

              <label htmlFor='endDate'>endDate</label>
              <input type="date" id ="endDate"
               value={endDate} onChange={(e)=>{setEndDate(e.target.value)}}
               required>
              </input>

              <button className='btn btn-primary' onClick={handleFormSubmit}>Submit</button>
            </form>
          </div>
          :
          <></>}
        
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Leave Id</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>1</td>
              <td>"2023-03-11"</td>
              <td>"2023-03-25"</td>
              <td>"Sick Leave"</td>
              <td>"Waiting"</td>
            </tr>
            {
              leaves.map(leave=>(
                <tr key={leave.leave_id}>
                  <th>{leave.leave_id}</th>
                  <th>{leave.startDate}</th>
                  <th>{leave.endDate}</th>
                  <th>{leave.type}</th>
                  <th>{leave.status}</th>
                </tr>
              )

              )
            }
          </tbody>
        </table>
      </div>
      )
}