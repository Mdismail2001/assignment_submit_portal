import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/login/Login.jsx';
import Registration from './components/registration/Registration.jsx';

import './index.css';
import 'flowbite-react';
import 'flowbite';
import 'flowbite/dist/flowbite.min.css';
// import TeadashBoard from './components/dashboard/TeadashBoard.jsx';
// import StudashBoard from './components/dashboard/StudashBoard.jsx';
import Header from './components/sharedComponents/Header.jsx';
import TeacherDash from './components/dashboard/Teachers/TeacherDash.jsx';
import StudentDash from './components/dashboard/Students/StudentDash.jsx';
import Footer from './components/sharedComponents/Footer.jsx';
import Content from './components/sharedComponents/Content.jsx';
import SideBar from './components/sharedComponents/SideBar.jsx';
import PieChart from './components/pie_chart/PieChart.jsx';
import TeacherAssTable from './components/dashboard/Teachers/TeacherAssTable.jsx';
import ReviewPanel from './components/dashboard/Teachers/ReviewPanel.jsx';
import DashboardOverview from './components/dashboard/Teachers/DashboardOverview.jsx';
import AssignmentCreate from './components/dashboard/Teachers/AssignmentCreate.jsx';
import TotalAssignments from './components/sharedComponents/TotalAssignments.jsx';
import TotalSubmission from './components/dashboard/Teachers/TotalSubmission.jsx';
import Home from './components/home/Home.jsx';
import Edit from './components/dashboard/Teachers/Edit.jsx';
import Delete from './components/dashboard/Teachers/Delete.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/header" element={<Header/>} />
          <Route path="/sidebar" element={<SideBar/>} />
          <Route path='/content' element={< Content/>} />
          <Route path='/footer' element={<Footer/>} />
          <Route path="/student-dashboard" element={<StudentDash/>}/>
          <Route path="/teacher-dashboard" element={<TeacherDash/>}>
            <Route path='' element={<DashboardOverview/>}/>
            <Route path='ass-table' element={<TeacherAssTable/>}/>
            <Route path="ass-table/edit/:id" element={<Edit/>}/> 
            <Route path="ass-table/delete/:id" element={<Delete/>}/> 
            <Route path='review-panel' element={<ReviewPanel/>}/>
            <Route path='pie' element={<PieChart/>} />
            <Route path='create' element={<AssignmentCreate/>}/>
            <Route path='total-assignments' element={<TotalAssignments/>}/>
            <Route path='total-submission' element={<TotalSubmission/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
