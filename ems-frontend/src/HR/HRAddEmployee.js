import React, { useState } from 'react'
import axios from 'axios';

export default function HRAddEmployee() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [role, setRole] = useState();

    const handleSave=()=>{
        const emp = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            role : role
        }
        axios.post("http://localhost:8000/hr/addnew",emp)
        .then(response=>{
            if(response.status == 200)
            {
                alert(
                    "Employee added successfully."
                )
            }
            else
            {
                alert(
                    "Something went wrong. Try again"
                )
            }
        }).catch(console.error())
    }
    return (
        <div>
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" >
                            <div className='btn bg-primary mt-2'>
                                <h3>Add Employee Details</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group mb-2">
                                        <input placeholder="First Name" id="firstName" className="form-control"
                                            value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <input placeholder="Last Name" id="lastName" className="form-control"
                                            value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <input placeholder="Email Address" id="email" className="form-control"
                                            value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <input placeholder=" Job Role" id="role" className="form-control"
                                            value={role} onChange={(e)=>{setRole(e.target.value)}} />
                                    </div>

                                    <button className="btn btn-success " style={{ marginTop: "10px" }} onClick={handleSave}>Save</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
