import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import EditProfile from '../CommonFunctionalities/EditProfile';
import EmailChange from '../CommonFunctionalities/EmailChange';
import PasswordChange from '../CommonFunctionalities/PasswordChange';
import HRDashboard from '../HR/HRDashboard';
import HRDocuments from '../HR/HRDocuments';
import HRIssues from '../HR/HRIssues';
import HRLeaves from '../HR/HRLeaves';

export default function HRSideBar() {
    const location = useLocation();
    const HRObject = location.state;
    const [menu, setMenu] = useState("HRDashboard");
    return (
      <div>
          <div class="container-fluid">
      <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                  <a href="/hrsidebar" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                      <span class="fs-5 d-none d-sm-inline">HR Dashboard</span>
                  </a>
                  <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                      <li class="nav-item">
                          <button class="nav-link align-middle px-0" onClick={()=>{setMenu("HRDocuments")}}>
                              <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Review Documents</span>
                          </button>
                      </li>
                      <li>
                          <button class="nav-link px-0 align-middle" onClick={()=>{setMenu("HRLeaves")}}>
                              <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Approve Leaves</span></button>
                      </li>
                      <li>
                          <button class="nav-link px-0 align-middle" onClick={()=>{setMenu("HRIssues")}}>
                              <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline"> Review Issues</span> </button>
                      </li>
                      <li>
                          <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                              <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Settings</span> </a>
                              <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                              <li class="w-100">
                              <button href="/editprofile" class="nav-link px-0" onClick={()=>{setMenu("EditProfile")}}> <span class="d-none d-sm-inline">Edit Profile</span></button>
                              </li>
                              <li>
                              <button href="/passwordchange" class="nav-link px-0" onClick={()=>{setMenu("ChangePassword")}}> <span class="d-none d-sm-inline">Change Password</span></button>
                              </li>
                              <li>
                              <button href="/emailchange" class="nav-link px-0" onClick={()=>{setMenu("ChangeEmail")}}> <span class="d-none d-sm-inline">Change Email Address</span></button>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="col py-3">
              {menu === "HRDashboard" && <HRDashboard object={HRObject}/>}
              {menu === "HRDocuments" && <HRDocuments />}
              {menu === "HRLeaves" && <HRLeaves />}
              {menu === "HRIssues" && <HRIssues />}
              {menu === "EditProfile" && <EditProfile object={HRObject} />}
              {menu === "ChangePassword" && <PasswordChange object={HRObject} />}
              {menu === "ChangeEmail" && <EmailChange object={HRObject} />}
          </div>
      </div>
  </div>
      </div>
    )
}
