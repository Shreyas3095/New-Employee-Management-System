import React from 'react'

export default function EmployeeDashboard(props) {
  const EmpObject = props.object;
  return (
    <>
    <span><h3>Employee Details</h3></span>
    <table class="table">
    <tbody>
      <tr>
        <th scope="row">Name</th>
        <td scope="row">{EmpObject.emp.firstName} {EmpObject.emp.lastName}</td>
      </tr>
      <tr>
        <th scope="row">Role</th>
        <td>{EmpObject.emp.role}</td>
      </tr>
      <tr>
        <th scope="row">Email</th>
        <td>{EmpObject.emp.email}</td>
      </tr>
      <tr>
        <th scope="row">Phone</th>
        <td>{EmpObject.emp.phone}</td>
      </tr>
      <tr>
        <th scope="row">Address</th>
        <td>{EmpObject.emp.address}</td>
      </tr>
    </tbody>
  </table>
  </>
    )
}
