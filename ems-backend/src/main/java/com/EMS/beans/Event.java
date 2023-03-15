package com.EMS.beans;

import javax.persistence.Entity;

import java.sql.Time;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.*;

@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int event_id;
    
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "description")
    private String description;
    
    @Column(name = "date")
    private LocalDate date;
    
    @Column(name = "location")
    private String location;

	public int getEvent_id() {
		return event_id;
	}

	public void setEvent_id(int event_id) {
		this.event_id = event_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Event(int event_id, String name, String description, LocalDate date, String location) {
		super();
		this.event_id = event_id;
		this.name = name;
		this.description = description;
		this.date = date;
		this.location = location;
	}

	public Event() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Event [event_id=" + event_id + ", name=" + name + ", description=" + description + ", date=" + date
				 + ", location=" + location + "]";
	}
    
    
    
    


}
