import Header from '../../sharedComponents/Header';
import Content from '../../sharedComponents/Content';
import SideBar from '../../sharedComponents/SideBar';

const StudentDash = () => {
    return (
        <div className="h-screen flex flex-col">
            <Header headTitle={"Students Dashboard"}/>

            <div className="flex flex-1 overflow-hidden">
            <SideBar 
            sidTitle1={"Dashboard Overview"} 
            sidTitle2={"Assignments"} 
            sidTitle3={"My Submissions"} 
            sidTitle4={"Status"}/>

            <div className="flex-1 overflow-y-auto">
            <Content/>  
            </div>
            </div>
        </div>
    );
};

export default StudentDash;