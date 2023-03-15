package com.EMS.Controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.EMS.Service.DocumentService;
import com.EMS.beans.Document;
import com.EMS.beans.DocumentResponse;
@CrossOrigin
@RestController
@RequestMapping("/document")
public class DocumentController {
	
	@Autowired
	private DocumentService DService;
	
	@PostMapping("/upload/{employee_id}")
	public ResponseEntity<?> uploadDocument(@RequestParam("document")List<MultipartFile> Filee, @PathVariable Integer employee_id) throws IOException
	{
		for(MultipartFile file:Filee)
		DService.uploadDocument(file, employee_id);
		return ResponseEntity.status(HttpStatus.OK).body("Done Added");
	}
	
	@GetMapping("/download/{fileName}")
	public ResponseEntity<byte[]> downloadDocument(@PathVariable String fileName)
	{
		byte[] document = DService.downloadDocument(fileName);
		
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(document);
	}
	
	@GetMapping("/downloadbyemp/{employee_id}")
	public ResponseEntity<List<DocumentResponse>> downloadDocumentByEmployee(@PathVariable int employee_id)
	{
		List<DocumentResponse> document = DService.downloadDocumentByEmployee(employee_id);
		
		System.err.println(document);
		return ResponseEntity.status(HttpStatus.OK).body(document);
	}
	
	@GetMapping("/image/{id}")
	public ResponseEntity<byte[]> getImage(@PathVariable int id) {
	    Optional<Document> image = DService.findById(id);
	    if (image.isPresent()) {
	        byte[] data = image.get().getDocumentData();
	        HttpHeaders headers = new HttpHeaders();
	        headers.setContentType(MediaType.valueOf(image.get().getType()));
	        headers.setContentLength(data.length);
	        return new ResponseEntity<>(data, headers, HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	
	
	
}








