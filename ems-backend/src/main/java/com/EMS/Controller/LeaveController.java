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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.EMS.Service.LeaveService;
import com.EMS.beans.Issue;
import com.EMS.beans.Leave;
@CrossOrigin
@RestController
@RequestMapping("/leave")
public class LeaveController {
	
	@Autowired
	LeaveService leaveService;
	
	
	@GetMapping("/getall")
	public ResponseEntity<List<Leave>> getAllLeave()
	{	  
		
		 List<Leave> a=leaveService.getAllLeave();
		 System.err.println(a);
		 
		 return  ResponseEntity.status(HttpStatus.OK).body(a);
	}
	
	
	@PostMapping("/addnew")
	public ResponseEntity<Leave> addNewLeave(@RequestBody Leave leave)
	{
		Leave newLeave = leaveService.addLeave(leave);
		if(newLeave != null)
		{
			return new ResponseEntity(Map.of("message","New Leave Added"), HttpStatus.OK);			
		}
		else
			return new ResponseEntity(Map.of("message","Something went wrong."), HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{leave_id}")
	public ResponseEntity<Leave> deleteLeave(@PathVariable Integer leave_id)
	{
		Boolean status = leaveService.deleteLeave(leave_id);
		if(status)
		{
			return new ResponseEntity(Map.of("message","leave deleted successfully"), HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity(Map.of("message","Leave does not Exist."), HttpStatus.OK);
		}
	}
	
	@PutMapping("/updatestatus/{leave_id}")
	public ResponseEntity<Leave> updateStatus(@PathVariable Integer leave_id ,@RequestParam("status") boolean status  )
	{
		leaveService.updateStatus(leave_id, status);
		return new ResponseEntity(Map.of("message","Leave status updated"),HttpStatus.OK);

	}

}
