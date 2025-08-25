import React from 'react';
import Header from '../../sharedComponents/Header';
import Footer from '../../sharedComponents/Footer';
import Content from '../../sharedComponents/Content';
import SideBar from '../../sharedComponents/SideBar';
import DashboardOverview from './DashboardOverview';

const TeacherDash = () => {
    return (
        <div >
            <Header headTitle={"Teachers Dashboard"}/>
            <div className='flex '>
            <SideBar sidTitle1={"Dashboard Overview"} sidTitle2={"Assignments"} sidTitle3={"Review Penal"} sidTitle4={"Status"}/>
            <Content/>  
            </div>
        </div>
    );
};

export default TeacherDash;