package com.EMS.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EMS.Dao.EventDAO;
import com.EMS.beans.Event;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	EventDAO eventDAO; 
	@Override
	public Event addEvent(Event event) {
		
		return eventDAO.save(event);
	}

	@Override
	public List<Event> getAllEvent() {
		// TODO Auto-generated method stub
		return eventDAO.findAll();
	}

	@Override
	public boolean deleteEvent(int event_id) {
		// TODO Auto-generated method stub
		
		if(eventDAO.existsById(event_id))
		{
			eventDAO.deleteById(event_id);
			return true;
		}
		return false;
	}

	
}
