package com.EMS.beans;

public class DocumentResponse {

	
	private String name;
	private String data;
	private int emp_id;
	private String type;
	public DocumentResponse(String name, String data, int emp_id, String type) {
		super();
		this.name = name;
		this.data = data;
		this.emp_id = emp_id;
		this.type = type;
	}
	public DocumentResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public int getEmp_id() {
		return emp_id;
	}
	public void setEmp_id(int emp_id) {
		this.emp_id = emp_id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "DocumentResponse [name=" + name + ", emp_id=" + emp_id + ", type=" + type + "]";
	}
	 
}
