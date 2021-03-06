import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
const Index = lazy(() => import('./index'));
const ClassManager = lazy(() => import('../components/class'))
const StudentManage = lazy(() => import('../container/studentM'))
const TeacherManage = lazy(() => import('../container/teacherM'))
const CourseManage = lazy(() => import('../container/course'))
const GradeManage = lazy(()=>import('../container/grade/'))
const AllGradeManage = lazy(() => import('../container/allGrade_A'))
const Sports = lazy(() => import('../container/sports'))
const MoralEdu = lazy(() => import('../container/moraledu'))
const MonitorVisible = lazy(() => import('../container/control'))
const NotMatch = lazy(() => import('../components/404'))
const Admin = (props) => {
    return (
        <Index>
            <Route exact path="/admin/monitor" component={MonitorVisible}/>
            <Route exact path="/admin/schoolcircle" />
            <Route exact path="/admin/studentmanage" component={StudentManage}/>
            <Route exact path="/admin/teachermanage" component={TeacherManage}/>
            <Route exact path="/admin/grademanage" component={GradeManage}/>
            <Route exact path="/admin/coursemanage" component={CourseManage}/>
            <Route exact path="/admin/classmanage" component={ClassManager} />
            <Route exact path="/admin/allgrade" component={AllGradeManage} />
            <Route exact path="/admin/sports" component={Sports}/>
            <Route exact path="/admin/moraledu" component={MoralEdu} />
            <Route exact path="/admin/impower" />
            <Route exact path="/admin/setting" />
            {/* <Route component={NotMatch} /> */}
        </Index>
    )
}
export default Admin