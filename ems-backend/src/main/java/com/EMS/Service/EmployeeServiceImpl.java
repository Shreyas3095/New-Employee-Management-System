package com.EMS.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import com.EMS.Dao.EmployeeDAO;
import com.EMS.Dao.IssueDAO;
import com.EMS.beans.Employee;
import com.EMS.beans.Issue;

@Service
public class EmployeeServiceImpl implements EmployeeService{
	@Autowired
	EmployeeDAO EDao;
	
	
	@Override
	public List<Employee> getAllEmployee() 
	{	
		return EDao.findAll();
	}

	@Override
	public Employee addNewEmployee(Employee newEmployee) {
		
		return EDao.save(newEmployee);
	}

	@Override
	public Boolean deleteEmployee(Integer employee_id) {
		EDao.deleteById(employee_id);
		return true;
		
	}

	@Override
	public Employee updateEmployee(Employee emp, Integer emp_id) {
		Employee Emp = EDao.findById(emp_id).orElseThrow();
		Emp.setFirstName(emp.getFirstName());
		Emp.setLastName(emp.getLastName());
		Emp.setAddress(emp.getAddress());
		Emp.setPhone(emp.getPhone());
		
		return EDao.save(Emp);
	}

	@Override
	public Employee getById(Integer employee_id) {
		return EDao.findById(employee_id).orElseThrow();
	}

	@Override
	public Employee getByEmail(String email) {
		
		return EDao.findByEmail(email);
	}

	@Override
	public Employee updatePassword(Employee emp) {
		Employee Emp = EDao.findById(emp.getEmployee_id()).orElseThrow();
		if(Emp != null)
		{
			Emp.setPassword(emp.getPassword());
			return EDao.save(Emp);
		}
		return null;
	}

	@Override
	public Employee updateEmail(Employee emp) {
		Employee Emp = EDao.findById(emp.getEmployee_id()).orElseThrow();
		if(Emp != null)
		{
			Emp.setEmail(emp.getEmail());
			return EDao.save(Emp);
		}
		return null;
	}

	@Override
	public boolean isPresent(Integer employee_id) {
		
		
		return EDao.existsById(employee_id);
	}

	
}







