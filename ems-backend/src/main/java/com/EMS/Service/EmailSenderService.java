package com.EMS.Service;

import org.springframework.mail.MailException;

public interface EmailSenderService 
{

	String sendEmail(String subject, String body, String to) throws MailException, InterruptedException;
	
}
