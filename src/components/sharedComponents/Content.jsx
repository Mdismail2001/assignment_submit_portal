import React from 'react';
import TeacherAssTable from '../dashboard/Teachers/TeacherAssTable';
import DashboardOverview from '../dashboard/Teachers/DashboardOverview';
import { Outlet } from 'react-router-dom';

const Content = ({  }) => {
  return (
    <div className="w-full h-auto">
        <div >
            <Outlet />
        </div>
    </div>
  );
};

export default Content;
