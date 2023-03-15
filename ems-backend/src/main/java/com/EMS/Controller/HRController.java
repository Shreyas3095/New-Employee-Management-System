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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EMS.Service.EmailSenderService;
import com.EMS.Service.EmployeeService;
import com.EMS.beans.Employee;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/hr")
public class HRController {
	@Autowired
	EmployeeService EService;
	@Autowired
	EmailSenderService emailSender;

	//this methods is for HR
	@GetMapping("/getall")
	public ResponseEntity<List<Employee>> getAllEmployee()
	{	
//		return ResponseEntity.status(HttpStatus.OK);
		List<Employee> a = EService.getAllEmployee();
		System.out.println();
		return ResponseEntity.status(HttpStatus.OK).body(a);
	}
	
	@GetMapping("/getbyid/{employee_id}")
	public ResponseEntity<Employee> getById(@PathVariable Integer employee_id)
	{
		return ResponseEntity.status(HttpStatus.OK).body(EService.getById(employee_id));
	}

	//this method is for HR
	@PostMapping("/addnew")
	public ResponseEntity<Employee> addNewEmployee(@RequestBody Employee newEmployee)
	{
		Employee newEmp = EService.addNewEmployee(newEmployee);
		if(newEmp != null)
		{
			String subject = "Welcome aboard "+newEmp.getFirstName()+"!";
			String body = "Dear "+newEmp.getFirstName()+",\nWelcome to Employee Management System Software. Looking forward to working with you.\nPlease find the employee id mentioned below this mail.\n"
					+ "Click on SignUp Employee button and set new password for first time login.\n"
					+ "Employee Name : "+newEmp.getFirstName()+" "+newEmp.getLastName()
					+ "Employee Id : "+newEmp.getEmployee_id();
			String to = newEmp.getEmail();
			try {
				emailSender.sendEmail(subject, body, to);
			} catch(MailException e) {
				e.printStackTrace();
			} catch(InterruptedException e) {
				e.printStackTrace();
			}
			return new ResponseEntity(Map.of("message","New Employee Added"), HttpStatus.OK);			
		}
		else
			return new ResponseEntity(Map.of("message","Something went wrong."), HttpStatus.NOT_FOUND);
	}

	//this method is for HR
	@DeleteMapping("/delete/{employee_id}")
	public ResponseEntity<Employee> deleteEmployee(@PathVariable Integer employee_id)
	{
		Boolean status = EService.deleteEmployee(employee_id);
		System.err.println(status);
		if(status)
		{
			return new ResponseEntity(Map.of("message","Employee deleted successfully"), HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity(Map.of("message","Something went wrong."), HttpStatus.OK);
		}
	}

}
