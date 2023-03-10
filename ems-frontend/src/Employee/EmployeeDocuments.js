import axios from 'axios';
import React, { useState } from 'react'

export default function EmployeeDocuments() {

  const[addhar,setAddhar]=useState(null);
  const[pan,setPan]=useState(null);
  const[pay,setPay]=useState(null);
  const[electric ,setElectric]=useState(null);

 const handleFormSubmit=()=>
  {
    const temp = sessionStorage.getItem('empString')
    const temp2=JSON.parse(temp);
    const employee_id=temp2.employeee_id;
      const files=[addhar,pan,pay,electric];
      axios.post(`http://localhost:8000/document/upload/${employee_id}`,{files})
  }
  const adharHandler=(e)=>{
    setAddhar(e.target.files[0])
  }

  const panHandler=(e)=>{
    setPan(e.target.files[0])
  }
  const payHandler=(e)=>{
setPay(e.target.files[0])
  }

  const electricHandler=(e)=>{
    setElectric(e.target.files[0])
  }


  return (
    <div>

    <form >
    <div class="mb-3" >
  <label for="Addhar" class="form-label">Upload Addhar Card</label>
  <input class="form-control" type="file" id="Addhar"
  onChange={adharHandler}
  ></input>
  
  <label for="Pan" class="form-label">Upload Pan Card</label>
  <input class="form-control" type="file" id="Pan"
  onChange={panHandler}
  ></input>
  
  <label for="PaySlip" class="form-label">Pay Slip</label>
  <input class="form-control" type="file" id="PaySlip"
  onChange={payHandler}
  ></input>
  
  <label for="ElectricBill" class="form-label">Upload ElectricBill</label>
  <input class="form-control" type="file" id="ElectricBill"
  onChange={electricHandler}
  ></input>

  <button className='btn btn-primary' onClick={handleFormSubmit}>Submit</button>
</div>
    </form>
    </div>
  )
}
