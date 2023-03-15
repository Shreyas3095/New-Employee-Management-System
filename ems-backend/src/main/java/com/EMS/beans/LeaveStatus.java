package com.EMS.beans;

public enum LeaveStatus {

	PENDING(1),
	APPROVED(2),
	REJECTED(3);

	private final int value;


	LeaveStatus(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}


	public static LeaveStatus getStatusByValue(int value) {
		for (LeaveStatus status : LeaveStatus.values()) {
			if (status.value == value) {
				return status;
			}
		}
		return null;
	}
}
