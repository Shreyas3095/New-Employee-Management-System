package com.EMS.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.EMS.beans.Document;
import com.EMS.beans.DocumentResponse;

public interface DocumentService {
	
	public Document uploadDocument(MultipartFile file, Integer employee_id) throws IOException;
	
	public byte[] downloadDocument(String documentName);

	public List<DocumentResponse> downloadDocumentByEmployee(int employee_id);

	public Optional<Document> findById(int id);
}
