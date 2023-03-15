package com.EMS.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
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

import com.EMS.Service.IssueService;
import com.EMS.beans.Employee;
import com.EMS.beans.Issue;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/issue")
public class IssueController {

	@Autowired
	private IssueService issueService;


	//for HR
	@GetMapping("/getall")
	public ResponseEntity<List<Issue>> getAllIssues()
	{	  
		
		 List<Issue> a=issueService.getAllIssues();
		 return  ResponseEntity.status(HttpStatus.OK).body(a);
	}
	
	//For Employee
	@PostMapping("/addnew/{employee_id}")
	public ResponseEntity<Issue> addNewIssue(@RequestBody Issue Issue,@PathVariable Integer employee_id)
	{
		
		Issue newIssue = issueService.addNewIssue(Issue,employee_id);
		if(newIssue != null)
		{
			return new ResponseEntity(Map.of("message","New Issue Added"), HttpStatus.OK);			
		}
		else
			return new ResponseEntity(Map.of("message","Something went wrong."), HttpStatus.OK);
	}
	
	
	// for hr/employee 
	@DeleteMapping("/delete/{issue_id}")
	public ResponseEntity<Issue> deleteIssue(@PathVariable Integer issue_id)
	{
		Boolean status = issueService.deleteIssue(issue_id);
		if(status)
		{
			return new ResponseEntity(Map.of("message","Issue deleted successfully"), HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity(Map.of("message","Issue does not Exist."), HttpStatus.OK);
		}
	}
	@GetMapping("/getissue/{employee_id}")
	public ResponseEntity<List<Issue>> getAllIssue(@PathVariable int employee_id)
	{	
//		return ResponseEntity.status(HttpStatus.OK);
		List<Issue> a = issueService.getAllIssuesOfEmployee(employee_id);
		System.out.println(a);
		return ResponseEntity.status(HttpStatus.OK).body(a);
	}
	
	
	
	//for hr
	@PutMapping("/updatestatus/{issue_id}")
	public ResponseEntity<Issue> updateStatus(@PathVariable Integer issue_id ,@RequestParam("status") boolean status  )
	{
		issueService.updateIssueStatus(issue_id, status);
		return new ResponseEntity(Map.of("message","Issue status updated"),HttpStatus.OK);

	}
	
	
		
	
}
