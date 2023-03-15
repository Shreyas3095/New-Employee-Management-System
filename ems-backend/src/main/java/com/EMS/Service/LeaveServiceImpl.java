package com.EMS.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EMS.Dao.LeaveDAO;
import com.EMS.beans.Leave;
import com.EMS.beans.LeaveStatus;

@Service
public class LeaveServiceImpl implements LeaveService {

	@Autowired
	private LeaveDAO LDAO;
	
	
	@Override
	public List<Leave> getAllLeave() {
		return LDAO.findAll();
	}

	@Override
	public Leave addLeave(Leave leave) {
		LDAO.save(leave);
		return leave;
	}

	@Override
	public boolean deleteLeave(int leave_Id) {
		if(LDAO.existsById(leave_Id))
		{
			LDAO.deleteById(leave_Id);
			return true;
		}
		return false;
	}
	

	@Override
	public boolean updateStatus(int leave_Id,boolean status) {
		
			Optional<Leave> a = LDAO.findById(leave_Id);
			if(a.isPresent())
			{
				Leave temp = a.get();
				temp.setStatus(status);
				LDAO.save(temp);
				return true;
			}

		return false;
	}

}
