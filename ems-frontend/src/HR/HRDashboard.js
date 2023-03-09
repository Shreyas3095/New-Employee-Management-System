import React from 'react'

export default function HRDashboard(props) {
  const HRObject = props.object;
  return (
    <>
    <span><h3>HR Details</h3></span>
    <table class="table">
    <tbody>
      <tr>
        <th scope="row">Name</th>
        <td scope="row">{HRObject.emp.firstName} {HRObject.emp.lastName}</td>
      </tr>
      <tr>
        <th scope="row">Role</th>
        <td>{HRObject.emp.role}</td>
      </tr>
      <tr>
        <th scope="row">Email</th>
        <td>{HRObject.emp.email}</td>
      </tr>
      <tr>
        <th scope="row">Phone</th>
        <td>{HRObject.emp.phone}</td>
      </tr>
      <tr>
        <th scope="row">Address</th>
        <td>{HRObject.emp.address}</td>
      </tr>
    </tbody>
  </table>
  </>
  )
}
