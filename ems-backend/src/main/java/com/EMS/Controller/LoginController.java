package com.EMS.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EMS.Service.EmployeeService;
import com.EMS.beans.Employee;
@CrossOrigin
@RestController
@RequestMapping("/login")
public class LoginController {
	@Autowired
	EmployeeService EService;
	//this method is for login
	@PostMapping("/getemployee")
	public ResponseEntity<Employee> getEmployee(@RequestBody Employee emp)
	{
		System.out.println(emp.getPassword());
		if(EService.isPresent(emp.getEmployee_id()))
		{
		Employee Emp = EService.getById(emp.getEmployee_id());
			System.err.println(Emp);
			if(Emp.getPassword().equals(emp.getPassword()))
			{
				return new ResponseEntity(Emp,HttpStatus.OK);			
			}
			else
			{
				return new ResponseEntity(Map.of("message","Incorrect Password"), HttpStatus.NOT_FOUND);
			}
		}
		else
		{
			return new ResponseEntity(Map.of("message","Id not found"), HttpStatus.OK);
		}
	}
	
	@PostMapping("/setpassword")
	public ResponseEntity<Employee> registerPassword(@RequestBody Employee emp)
	{
		return ResponseEntity.ok(EService.updatePassword(emp));
	}

}







