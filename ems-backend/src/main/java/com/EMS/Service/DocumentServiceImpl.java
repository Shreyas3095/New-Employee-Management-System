package com.EMS.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.EMS.Dao.DocumentDAO;
import com.EMS.Dao.EmployeeDAO;
import com.EMS.beans.Document;
import com.EMS.beans.DocumentResponse;
import com.EMS.beans.Employee;

@Service
public class DocumentServiceImpl implements DocumentService{
	
	@Autowired
	private DocumentDAO DDao;
	@Autowired
	private EmployeeDAO EDao;
	
	public Document uploadDocument(MultipartFile file, Integer employee_id) throws IOException
	{
		Employee emp = EDao.findById(employee_id).orElseThrow();
		Document document = new Document();
		document.setEmployee(emp);
		document.setName(file.getOriginalFilename());
		document.setType(file.getContentType());
		document.setDocumentData(file.getBytes());
//		document.setDocumentData(DocumentUtil.compressDocument(file.getBytes()));
		
		return DDao.save(document);
	}
	
	public byte[] downloadDocument(String documentName)
	{
		Optional<Document> documentData = DDao.findByName(documentName);
		
		return DocumentUtil.decompressDocument(documentData.get().getDocumentData());
	}

	
	
	@Override
	public List<DocumentResponse> downloadDocumentByEmployee(int employee_id) {
		
		List<Document> documentData = DDao.findAll();
		List<DocumentResponse> DResponse= new ArrayList<>();
		
		for(Document d : documentData)
		{
			if(d.getEmployee().getEmployee_id()==employee_id)
			{
			byte[] imageData=d.getDocumentData();
			String encodedImage = Base64.getEncoder().encodeToString(imageData);
			DResponse.add(new DocumentResponse(d.getName(),encodedImage,employee_id,d.getType()));
			}
		}
		
		return DResponse;
	}

	@Override
	public Optional<Document> findById(int id) {
		
		return DDao.findById(id);
	}
	
	
	
	
}
