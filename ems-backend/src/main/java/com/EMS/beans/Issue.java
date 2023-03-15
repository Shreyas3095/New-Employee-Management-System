package com.EMS.beans;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Issue")
public class Issue {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int issue_id;
	
	@Column(name="title")
    private String title;
	
	@Column(name="description")
    private String description;
    
	@Column(name="status")
	private Boolean status;
    
	@ManyToOne()
	@JoinColumn(name="employee_id")
	private Employee employee;
	
	public Issue() {
		super();
	}
	public Issue(int issue_id, String title, String description, Boolean status, Employee employee) {
		super();
		this.issue_id = issue_id;
		this.title = title;
		this.description = description;
		this.status = status;
		this.employee = employee;
	}
	public int getIssue_id() {
		return issue_id;
	}
	public void setIssue_id(int issue_id) {
		this.issue_id = issue_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	public Employee getEmployee() {
		return employee;
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

    
 
       
}
    