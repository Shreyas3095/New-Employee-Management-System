import axios from 'axios'
import React from 'react'
import { useState } from 'react';

export default function HRDashboard() {  
  const empString = sessionStorage.getItem("empString");
  const emp = JSON.parse(empString);
  console.log("emp = ",emp);
  return (
    <>
    <span><h3>HR Details</h3></span>
    <table class="table">
    <tbody>
      <tr>
        <th scope="row">Name</th>
        <td scope="row">{emp.firstName} {emp.lastName}</td>
      </tr>
      <tr>
        <th scope="row">Role</th>
        <td>{emp.role}</td>
      </tr>
      <tr>
        <th scope="row">Email</th>
        <td>{emp.email}</td>
      </tr>
      <tr>
        <th scope="row">Phone</th>
        <td>{emp.phone}</td>
      </tr>
      <tr>
        <th scope="row">Address</th>
        <td>{emp.address}</td>
      </tr>
    </tbody>
  </table>
  </>
  )
}
