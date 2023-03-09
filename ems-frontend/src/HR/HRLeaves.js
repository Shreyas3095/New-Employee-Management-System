import React from 'react'

export default function HRLeaves() {
  return (
    <div>
      <h3>Employee Leaves</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Employee Name</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td><button type='button' className='btn btn-primary'>Approve</button>
            <button type='button' className='btn btn-primary'>Deny</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
