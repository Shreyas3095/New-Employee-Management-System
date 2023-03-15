package com.EMS.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EMS.Dao.EmployeeDAO;
import com.EMS.Dao.IssueDAO;
import com.EMS.beans.Employee;
import com.EMS.beans.Issue;

@Service
public class IssueServiceImpl implements IssueService {

	@Autowired
	IssueDAO issueDAO;
	@Autowired
	EmployeeDAO employeeDAO;

	@Override
	public List<Issue> getAllIssues() {
		
		return issueDAO.findAll();
	}


	@Override
	public Boolean deleteIssue(Integer issue_id) {
		if(issueDAO.existsById(issue_id))
		{
			issueDAO.deleteById(issue_id);
			return true;
		}
		return false;
	}

	

	@Override
	public List<Issue> getByEmpId(Integer emp_id) {
		
		List<Issue> empIssue= issueDAO.findAll();
		return empIssue;
		
	}

	

	@Override
	public Issue updateIssueStatus(Integer issue_id, boolean status) {
		
		Optional<Issue> emp = issueDAO.findById(issue_id);
		if(emp.isPresent())
		{
			Issue empIssue = emp.get();
			empIssue.setStatus(status);
			issueDAO.save(empIssue);
			
			
			return empIssue;
			
		}
		return null;

		}

	@Override
	public List<Issue> getAllIssuesOfEmployee(int emp_id) {
		
		List<Issue> temp = issueDAO.findAll();
		System.err.println(temp);
		Iterator<Issue> it = temp.iterator();
		List<Issue> temp2 = new ArrayList<>();
		while(it.hasNext())
		{
			Issue ita = it.next();
			if(ita.getEmployee().getEmployee_id() == emp_id)
			{	
				temp2.add(ita);
			}
		}
		return temp2;
	}

	@Override
	public Issue addNewIssue(Issue employeeIssue, Integer employee_id) {
		
		Employee temp = new Employee();
		temp.setEmployee_id(employee_id);
		employeeIssue.setEmployee(temp);
		
		return issueDAO.save(employeeIssue);
	}

	
	
	
}
