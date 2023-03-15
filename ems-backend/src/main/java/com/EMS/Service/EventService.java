package com.EMS.Service;

import java.util.List;

import com.EMS.beans.Event;

public interface EventService {

	public Event addEvent(Event event);
	
	public List<Event> getAllEvent();
	
	public boolean deleteEvent(int event_id);
	
}
