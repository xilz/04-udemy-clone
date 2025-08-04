import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Student/Home'
import CourseList from './pages/Student/CourseList'
import CourseDetails from './pages/Student/CourseDetails'
import MyEnrollment from './pages/Student/MyEnrollment'
import Player from './pages/Student/Player'
import Loading from './components/Student/Loading'
import Educator from './pages/Educator/Educator'
import Dashboard from './pages/Educator/Dashboard'
import AddCourse from './pages/Educator/AddCourse'
import MyCourses from './pages/Educator/MyCourses'
import StudentsEnrolled from './pages/Educator/StudentsEnrolled'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollment />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        <Route path='/educator' element={<Educator />}>
          <Route path='educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='student-enrolled' element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App