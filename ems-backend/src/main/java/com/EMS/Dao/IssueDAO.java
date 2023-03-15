package com.EMS.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EMS.beans.Employee;
import com.EMS.beans.Issue;

public interface IssueDAO extends JpaRepository<Issue, Integer>{


	
}
