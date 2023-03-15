package com.EMS.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EMS.beans.Event;

public interface EventDAO extends JpaRepository<Event, Integer>{

}
