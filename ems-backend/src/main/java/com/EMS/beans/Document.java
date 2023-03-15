package com.EMS.beans;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="document")
public class Document {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer document_id;
	
	private String name;
	private String type;
	
	private boolean status;
	@Lob
	private byte[] documentData;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="employee_id")
	private Employee employee;
		
	public Document() {
		super();
	}

	public Document(Integer document_id, String name, String type, boolean status, byte[] documentData,
			Employee employee) {
		super();
		this.document_id = document_id;
		this.name = name;
		this.type = type;
		this.status = status;
		this.documentData = documentData;
		this.employee = employee;
	}

	public Integer getDocument_id() {
		return document_id;
	}

	public void setDocument_id(Integer document_id) {
		this.document_id = document_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public byte[] getDocumentData() {
		return documentData;
	}

	public void setDocumentData(byte[] documentData) {
		this.documentData = documentData;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	@Override
	public String toString() {
		return "Document [document_id=" + document_id + ", name=" + name + ", type=" + type + ", status=" + status
				+ ", employee=" + employee + "]";
	}
	
	
		
}
