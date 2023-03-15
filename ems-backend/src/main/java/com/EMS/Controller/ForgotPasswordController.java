package com.EMS.Controller;

import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EMS.Service.EmailSenderService;
import com.EMS.Service.EmployeeService;
import com.EMS.beans.Employee;
@CrossOrigin
@RestController
@RequestMapping("/forgot")
public class ForgotPasswordController {
	Random random = new Random();
	static int otp;
	@Autowired
	EmployeeService EService;
	
	@Autowired
	EmailSenderService emailSenderService;
	
	@PostMapping("/verify")
	public ResponseEntity<Employee> verifyEmailOTP(@RequestBody Employee emp)
	{
		System.out.println(emp);
		Employee Emp = EService.getByEmail(emp.getEmail());
		if(Emp != null)
		{
			otp = random.nextInt(999999);
			System.out.println("OTP = "+otp);
			
			String subject="Your password reset OTP code";
			String body = "Dear Employee,\nWelcome, We thank you for using Employee Management System website.\n\nYour password reset OTP code is : "+otp+".";
			String to= Emp.getEmail();
			String msg = null;
			try {
				msg = emailSenderService.sendEmail(subject, body, to);
			} catch(MailException e) {
				e.printStackTrace();
			} catch(InterruptedException e) {
				e.printStackTrace();
			}
			return new ResponseEntity(Map.of("msg",msg), HttpStatus.OK); //editing to be done here
		}
		else
		{
			return new ResponseEntity("Email Id does not match. Please enter resigtered email", HttpStatus.NOT_FOUND);
		}		
	}
	@PostMapping("/otp")
	public ResponseEntity<String> verifyOTP(@RequestHeader int newotp)
	{
		if(otp == newotp)
		{
			return new ResponseEntity("Verification successful", HttpStatus.ACCEPTED);
		}
		else
		{
			return new ResponseEntity("Incorrect OTP", HttpStatus.EXPECTATION_FAILED);
		}
	}
	
}






