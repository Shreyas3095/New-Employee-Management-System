import React, { useState,useEffect } from 'react'
import axios from 'axios';


export default function EmployeeEvents() {

  const[events,setEvents]=useState([]);
  
  useEffect(()=>{
      axios.get("http://localhost:8000/event/getall")
      .then(response=>
        {
          console.log("useEffect");
          console.log(response.data)
          const eventString=JSON.stringify(response.data);
          sessionStorage.setItem('eventString',eventString);
          setEvents(response.data)
        })
        .catch(error=>{
          console.log("Event error");
        })
  
    },[])
  
  
  

      
    
    
  return (
    <div>
      


      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Event Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Location</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
        {events.map(event=>(
            <tr key={event.event_id}>
            <td>{event.event_id}</td>
            <td>{event.name}</td>
            <td>{event.description}</td>
            <td>{event.location}</td>
            <td>{event.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

