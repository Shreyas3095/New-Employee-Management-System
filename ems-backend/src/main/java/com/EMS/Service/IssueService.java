package com.EMS.Service;

import java.util.List;

import com.EMS.beans.Issue;

public interface IssueService {

	public  List<Issue> getAllIssues();
	
	public Issue addNewIssue(Issue employeeIssue, Integer employee_id);

	public Boolean deleteIssue(Integer issue_id);
	
	public List<Issue> getByEmpId(Integer emp_id);
	
	public Issue updateIssueStatus(Integer issue_id,boolean status);

	public List<Issue> getAllIssuesOfEmployee(int emp_id);
	
}
