package com.EMS.Service;

import java.util.List;

import com.EMS.beans.Employee;
import com.EMS.beans.Issue;

public interface EmployeeService {
	public List<Employee> getAllEmployee();
	
	public Employee addNewEmployee(Employee newEmployee);

	public Boolean deleteEmployee(Integer employee_id);

	public Employee updateEmployee(Employee emp, Integer emp_id);

	public Employee getById(Integer employee_id);

	public Employee getByEmail(String email);

	public Employee updatePassword(Employee emp);

	public Employee updateEmail(Employee emp);

	public boolean isPresent(Integer employee_id);
	
}
