package com.EMS.beans;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "leaves")
public class Leave {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer leave_id;

	    @ManyToOne()
	    @JoinColumn(name = "employee_id")
	    private Employee employee;

	    @Column(name = "start_date")
	    private LocalDate startDate;

	    @Column(name = "end_date")
	    private LocalDate endDate;

	    @Column(name="type")
	    private String type;
	    
	    @Column(name = "status")
	    private boolean status;

		public Leave() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Leave(Integer leave_id, Employee employee, LocalDate startDate, LocalDate endDate, String type,
				boolean status) {
			super();
			this.leave_id = leave_id;
			this.employee = employee;
			this.startDate = startDate;
			this.endDate = endDate;
			this.type = type;
			this.status = status;
		}

		public Integer getLeave_id() {
			return leave_id;
		}

		public void setLeave_id(Integer leave_id) {
			this.leave_id = leave_id;
		}

		public Employee getEmployee() {
			return employee;
		}

		public void setEmployee(Employee employee) {
			this.employee = employee;
		}

		public LocalDate getStartDate() {
			return startDate;
		}

		public void setStartDate(LocalDate startDate) {
			this.startDate = startDate;
		}

		public LocalDate getEndDate() {
			return endDate;
		}

		public void setEndDate(LocalDate endDate) {
			this.endDate = endDate;
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

		@Override
		public String toString() {
			return "Leave [leave_id=" + leave_id + ", employee=" + employee + ", startDate=" + startDate + ", endDate="
					+ endDate + ", type=" + type + ", status=" + status + "]";
		}

		
}
