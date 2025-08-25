import React from 'react';
import Header from '../../sharedComponents/Header';
import Footer from '../../sharedComponents/Footer';
import Content from '../../sharedComponents/Content';
import SideBar from '../../sharedComponents/SideBar';

const StudentDash = () => {
    return (
        <div>
            <Header headTitle={"Students Dashboard"}/>
            <div className='flex '>
            <SideBar sidTitle1={"Student Dashboard"} sidTitle2={"Assignments"} sidTitle3={"My Submissions"} sidTitle4={"Status"}/>
            <Content/>  
            </div>
        </div>
    );
};

export default StudentDash;