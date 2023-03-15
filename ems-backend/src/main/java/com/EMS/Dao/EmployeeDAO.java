package com.EMS.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EMS.beans.Employee;

public interface EmployeeDAO extends JpaRepository<Employee, Integer>{

	Employee findByEmail(String email);
	
}
