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
import ReviewPanel from './components/dashboard/Teachers/ReviewPanel.jsx';
import DashboardOverview from './components/dashboard/Teachers/DashboardOverview.jsx';
import AssignmentCreate from './components/dashboard/Teachers/AssignmentCreate.jsx';
import TotalAssignments from './components/sharedComponents/TotalAssignments.jsx';
import TotalSubmission from './components/sharedComponents/TotalSubmission.jsx';
import Home from './components/home/Home.jsx';
import Edit from './components/dashboard/Teachers/Edit.jsx';
import Delete from './components/dashboard/Teachers/Delete.jsx';
import Assignments from './components/dashboard/Teachers/Assignments.jsx';
import ViewAssinments from './components/sharedComponents/ViewAssinments.jsx';
import ViewSubmission from './components/sharedComponents/ViewSubmission.jsx';
import OverView from './components/dashboard/Students/OverView.jsx';
import AvailableAssignments from './components/dashboard/Students/AvailableAssignments.jsx';
import Views from './components/dashboard/Students/ViewAssignmet.jsx';
import SubmitAssignment from './components/dashboard/Students/SubmitAssignment.jsx';
import TotalSubmitted from './components/dashboard/Students/TotalSubmitted.jsx';


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
          <Route path="/student-dashboard" element={<StudentDash/>}>          
            <Route path='' element={<OverView/>}/>
            <Route path='available-ass' element={<AvailableAssignments/>}/>
            <Route path='available-ass/views' element={<Views/>}/>
            <Route path='available-ass/views/submit' element={<SubmitAssignment/>} />
            <Route path='total-submitted' element={<TotalSubmitted/>}/>
          </Route>


          <Route path="/teacher-dashboard" element={<TeacherDash/>}>
            <Route path='' element={<DashboardOverview/>}/>
            <Route path='ass-table' element={<Assignments/>}/>
            <Route path="ass-table/edit/:id" element={<Edit/>}/> 
            <Route path="ass-table/delete/:id" element={<Delete/>}/> 
            <Route path='review-panel' element={<ReviewPanel/>}/>
            <Route path='pie' element={<PieChart/>} />
            <Route path='create' element={<AssignmentCreate/>}/>
            <Route path='total-assignments' element={<TotalAssignments/>}/>
            <Route path="total-assignments/total-assignments/:id" element={<ViewAssinments/>} />
            <Route path='total-submission' element={<TotalSubmission/>}/>
            <Route path="total-submission/total-submission/:id" element={<ViewSubmission/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
