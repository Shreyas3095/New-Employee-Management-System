import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Home/Home'
import EmployeeLeaves from '../Employee/EmployeeLeaves'
import EmployeeEvents from '../Employee/EmployeeEvents'
import EmployeeIssues from '../Employee/EmployeeIssues'
import EditProfile from '../CommonFunctionalities/EditProfile'
import PasswordChange from '../CommonFunctionalities/PasswordChange'
import EmailChange from '../CommonFunctionalities/EmailChange'
import EmployeeDashboard from '../Employee/EmployeeDashboard'
import HRDashboard from '../HR/HRDashboard'
import AboutUs from '../Home/AboutUs'
import ContactUs from '../Home/ContactUs'
import Login from '../Login/Login'
import EmployeeSideBar from '../NavigationBar/EmployeeSideBar'
import HRSideBar from '../NavigationBar/HRSideBar'
import SignUp from '../Login/SignUp'
import ForgotPassword from '../Login/ForgotPassword'
import HRIssues from '../HR/HRIssues'
import HRLeaves from '../HR/HRLeaves'
import HREvents from '../HR/HREvents'

export default function Routing() {
  return (
    <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword />}></Route>

        <Route path='/employeesidebar' element={<EmployeeSideBar />}></Route>
        <Route path="/employeedashboard" element={<EmployeeDashboard />}></Route>
        <Route path="/employeeleaves" element={<EmployeeLeaves />}></Route>
        <Route path='/employeeissues' element={<EmployeeIssues />}></Route>
        <Route path='/employeeevents' element={<EmployeeEvents />}></Route>

        <Route path='/hrsidebar' element={<HRSideBar />}></Route>
        <Route path="/hrdashboard" element={<HRDashboard />}></Route>
        <Route path='/hrevents' element={<HREvents />}></Route>
        <Route path='/hrissues' element={<HRIssues />}></Route>
        <Route path='/hrleaves' element={<HRLeaves />}></Route>
        <Route path='/editprofile' element={<EditProfile />}></Route>
        <Route path='/passwordchange' element={<PasswordChange />}></Route>
        <Route path='/emailchange' element={<EmailChange />}></Route>
    </Routes>      
  )
}
