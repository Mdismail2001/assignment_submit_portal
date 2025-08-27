import React from 'react';
import Header from '../../sharedComponents/Header';
import Content from '../../sharedComponents/Content';
import SideBar from '../../sharedComponents/SideBar';

const TeacherDash = () => {
    return (
        <div className="h-screen flex flex-col">
            {/* Fixed Header */}
            <Header headTitle={"Teachers Dashboard"} />

            <div className="flex flex-1 overflow-hidden">
                {/* Fixed Sidebar */}
                <SideBar
                    sidTitle1={"Dashboard Overview"}
                    sidTitle2={"Assignments"}
                    sidTitle3={"Review Penal"}
                    sidTitle4={"Status"}
                />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                    <Content />
                </div>
            </div>
        </div>
    );
};

export default TeacherDash;
