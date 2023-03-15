package com.EMS.Service;

import java.util.List;

import com.EMS.beans.Leave;

public interface LeaveService {

	public List<Leave> getAllLeave();
	
	public Leave addLeave(Leave leave);
	
	public boolean deleteLeave(int leave_Id);

	public boolean updateStatus(int leave_Id,boolean status);
	
	
}
