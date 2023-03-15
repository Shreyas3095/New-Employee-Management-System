package com.EMS.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EMS.Service.EventService;
import com.EMS.beans.Event;
import com.EMS.beans.Leave;
@CrossOrigin
@RestController
@RequestMapping("/event")
public class EventController {
	
	@Autowired
	EventService eventService;
	
	@GetMapping("/getall")
	public ResponseEntity<List<Event>> getAllEvent()
	{	  
		
		 List<Event> a=eventService.getAllEvent();
		 System.err.println(a);
		 
		 return  ResponseEntity.status(HttpStatus.OK).body(a);
	}
	@PostMapping("/addnew")
	public ResponseEntity<Event> addNewEvent(@RequestBody Event event)
	{
		Event newEvent = eventService.addEvent(event);
		if(newEvent != null)
		{
			return new ResponseEntity(Map.of("message","New Event Added"), HttpStatus.OK);			
		}
		else
			return new ResponseEntity(Map.of("message","Something went wrong."), HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{leave_id}")
	public ResponseEntity<Event> deleteEvent(@PathVariable Integer event_id)
	{
		Boolean status = eventService.deleteEvent(event_id);
		if(status)
		{
			return new ResponseEntity(Map.of("message","Event deleted successfully"), HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity(Map.of("message","Event does not Exist."), HttpStatus.OK);
		}
	}

}
