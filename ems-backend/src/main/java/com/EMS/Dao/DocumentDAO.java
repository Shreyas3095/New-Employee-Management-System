package com.EMS.Dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EMS.beans.Document;

public interface DocumentDAO extends JpaRepository<Document, Integer>{
	Optional<Document> findByName(String documentName);
}
