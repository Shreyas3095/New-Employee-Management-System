import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function HREmployeeCrud() {
    const [employeeList, setEmployeeList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/hr/getall")
            .then(response => {
                setEmployeeList(response.data)
            }).catch(error => { console.log(error); }, []);
    })

    const handleDeleteEmployee = (employee_id) => {
        axios.delete(`http://localhost:8000/hr/delete/${employee_id}`)
            .then(response => { console.log(response); })
    }
    return (
        <div>
            <div>
                <h2 className="text-left">Employees List</h2>
                <div>
                    <a href='/hraddemployee'> <button className="btn btn-primary mb-50 wb-25"> Add Employee</button></a>
                </div>
                <br></br>
                <div className="container">
                    <table className="table table-hover">

                        <thead>
                            <tr>
                                <th scope="col"> Name</th>
                                <th scope="col"> Role</th>
                                <th scope="col"> Email Id</th>
                                <th scope="col"> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employeeList.map(
                                    employee =>
                                        <tr key={employee.employee_id}>
                                            <td scope="row">{employee.firstName} {employee.lastName}</td>
                                            <td scope="row">{employee.role}</td>
                                            <td scope="row"> {employee.email}</td>
                                            <td scope="row">
                                                <button style={{ marginLeft: "10px" }} onClick={() => handleDeleteEmployee(employee.employee_id)} className="btn btn-danger">Delete </button>
                                                {/* <button style={{ marginLeft: "10px" }} onClick={() => handleViewEmployee(employee.employee_id)} className="btn btn-info">View </button> */}
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
