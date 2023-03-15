package com.EMS.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderServiceImpl implements EmailSenderService{
	
	@Autowired
	private JavaMailSender mailSender;
	
	@org.springframework.beans.factory.annotation.Value("${spring.mail.username}")
	private String sender;
	
	public EmailSenderServiceImpl(JavaMailSender mailSender) {
		this.mailSender = mailSender;
	}

	public EmailSenderServiceImpl() {
		
	}

	@Override
	public String sendEmail(String subject, String body, String to) throws MailException, InterruptedException {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom(sender);
		message.setTo(to);
		message.setSubject(subject);
		message.setText(body);
		
		mailSender.send(message);
		return "A mail has been sent to your registered email id along with the OTP.";
	}
}
