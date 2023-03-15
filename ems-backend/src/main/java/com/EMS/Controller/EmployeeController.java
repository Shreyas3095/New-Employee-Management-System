 package com.EMS.Controller;



import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EMS.Service.EmployeeService;
import com.EMS.beans.Employee;
import com.EMS.beans.Issue;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/employee")
public class EmployeeController {
	@Autowired
	EmployeeService EService;
	
	
	
	//Testing for git push
	//this method is for Employee(non-HR)
	@PutMapping("/updateemployee/{employee_id}")
	public ResponseEntity<Employee> updateEmployee(@RequestBody Employee emp, @PathVariable Integer employee_id)
	{
		if(EService.isPresent(employee_id))
			return ResponseEntity.ok(EService.updateEmployee(emp, employee_id));
		else
			return ResponseEntity.ok(null);
	}
	
	
	//this method is for Employee(non-HR)
	@PutMapping("/updatepassword")
	public ResponseEntity<Employee> updatePassword(@RequestBody Employee emp)
	{
		return ResponseEntity.ok(EService.updatePassword(emp));
	}
	
	@PutMapping("/updateemail")
	public ResponseEntity<Employee> updateEmail(@RequestBody Employee emp)
	{
		return ResponseEntity.ok(EService.updateEmail(emp));
	}
	
	
	
}











