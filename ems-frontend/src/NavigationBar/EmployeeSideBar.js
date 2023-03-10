import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import EditProfile from '../CommonFunctionalities/EditProfile';
import EmailChange from '../CommonFunctionalities/EmailChange';
import PasswordChange from '../CommonFunctionalities/PasswordChange';
import EmployeeEvents from '../Employee/EmployeeEvents';
import EmployeeDashboard from '../Employee/EmployeeDashboard';
import EmployeeIssues from '../Employee/EmployeeIssues';
import EmployeeLeaves from '../Employee/EmployeeLeaves';
import EmployeeDocuments from '../Employee/EmployeeDocuments';

export default function EmployeeSideBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const EmpObject = location.state;
    const [menu, setMenu] = useState("EmployeeDashboard");
    return (
        <div>
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/employeesidebar" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span class="fs-5 d-none d-sm-inline">Employee Dashboard</span>
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li class="nav-item">
                                    <button class="nav-link align-middle px-0" onClick={() => { setMenu("EmployeeDocuments") }}>
                                        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Upload Documents</span>
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link align-middle px-0" onClick={() => { setMenu("EmployeeLeaves") }}>
                                        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Apply Leaves</span>
                                    </button>
                                </li>
                                <li>
                                    <button class="nav-link px-0 align-middle" onClick={() => { setMenu("EmployeeEvents") }}>
                                        <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">View Events</span></button>
                                </li>
                                <li>
                                    <button class="nav-link px-0 align-middle" onClick={() => { setMenu("EmployeeIssues") }}>
                                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Report Issues</span> </button>
                                </li>
                                <li>
                                    <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Settings</span> </a>
                                    <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <button href="/editprofile" class="nav-link px-0" onClick={() => { setMenu("EditProfile") }}> <span class="d-none d-sm-inline">Edit Profile</span></button>
                                        </li>
                                        <li>
                                            <button href="/passwordchange" class="nav-link px-0" onClick={() => { setMenu("ChangePassword") }}> <span class="d-none d-sm-inline">Change Password</span></button>
                                        </li>
                                        <li>
                                            <button href="/emailchange" class="nav-link px-0" onClick={() => { setMenu("ChangeEmail") }}> <span class="d-none d-sm-inline">Change Email Address</span></button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul id="logout" class=" nav-item nav nav-pills flex-column mb-0 align-items-center align-items-sm-start">
                                <li>
                                    <button class="nav-link align-middle px-0" onClick={() => { navigate("/login") }}>
                                        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Logout</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col py-3">
                        {menu === "EmployeeDashboard" && <EmployeeDashboard object={EmpObject} />}
                        {menu === "EmployeeDocuments" && <EmployeeDocuments />}
                        {menu === "EmployeeLeaves" && <EmployeeLeaves />}
                        {menu === "EmployeeEvents" && <EmployeeEvents />}
                        {menu === "EmployeeIssues" && <EmployeeIssues />}
                        {menu === "EditProfile" && <EditProfile object={EmpObject} />}
                        {menu === "ChangePassword" && <PasswordChange object={EmpObject} />}
                        {menu === "ChangeEmail" && <EmailChange object={EmpObject} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
