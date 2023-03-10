import React, { useState,useEffect } from 'react'
import axios from 'axios';


export default function HRDocument() {
  const [toggle, setToggle] = useState(false);
  const[description,setDescription]=useState('');
  const[name,setName]=useState('');
  const[location,setLocation]=useState('');
  const[date,setDate]=useState('');
  const[events,setEvents]=useState([]);
  
  useEffect(()=>{
      axios.get("http://localhost:8000/event/getall")
      .then(response=>
        {
          console.log("useEffect");
          
          const eventString=JSON.stringify(response.data);
          sessionStorage.setItem('eventString',eventString);
          setEvents(response.data)
          console.log(events)
        })
        .catch(error=>{
          console.log("Event error");
        })
  
    },[])
  
  const handleAddIssue = () => {
    setToggle(true);
  }
  const handleFormSubmit = () => {
    setToggle(false);
    axios.post("http://localhost:8000/event/addnew",{name,description,date,location})
    .then(response=>{
      alert("Event Added successfully")
        const eventString=sessionStorage.getItem('eventString');
        let eventJson=JSON.parse(eventString);
        let temp=[...eventJson]
        temp.push(response.data)
      
        console.log("hande");
        console.log(temp);
        setEvents(temp);
      
    })
    .catch(error=>alert("Error"));
  }
  

    const deleteHandler=(event_id)=>{
      console.log(event_id);
      axios.delete(`http://localhost:8000/event/delete/${event_id}`)
      .then(alert("Deleted successfull"));
     
    
      let temp1 = sessionStorage.getItem('eventString');
     let temp=JSON.parse(temp1);
      const eventS=temp.filter(obj=>obj.event_id !== event_id);
      const eventString=JSON.stringify.eventS;
      console.log("After Deleter"+event_id);
      console.log(eventS);
      setEvents(eventS);
      sessionStorage.setItem('eventString',eventString);
      
    
      
    }

  return (
    <div>
      <div class="text-left">
        <button className='btn btn-primary' type='button' onClick={handleAddIssue}>Add Event</button>
      </div>
      <div>
        {toggle?
        <div>
          <form class="form-sign-in">
            <label htmlFor='name'>Name</label>
            <input type="text" id='name'
                value={name} onChange={(e)=>{setName(e.target.value)}}
                required
            ></input>
            
            <label htmlFor='desc'>Description</label>
            <input type="text" id='desc'
                value={description} onChange={(e)=>{setDescription(e.target.value)}}
                required
            ></input>

            <label htmlFor='loc'>Location</label>
            <input type="text" id='loc'
                value={location} onChange={(e)=>{setLocation(e.target.value)}}
                required
            ></input>

            <label htmlFor='date'>Location</label>
            <input type="date" id='date'
                value={date} onChange={(e)=>{setDate(e.target.value)}}
              
            ></input>
            <button className='btn btn-primary' onClick={handleFormSubmit}>Submit</button>
          </form>
        </div>
        :
        <></>}
      </div>


      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Event Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Location</th>
            <th scope="col">Date</th>
            <th scope='col'>Action</th>
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
            <td><button type='button' className='btn btn-primary' onClick={()=>deleteHandler(event.event_id)} >Delete</button></td>
            {/* onClick={()=>deleteHandler(event.event_id)} */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

