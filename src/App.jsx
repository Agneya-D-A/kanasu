import { useState } from 'react'
import lion from './lion.png'
import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import VolunteerExperience from './pages/VolunteerExperience';
import StudentExperience from './pages/StudentExperience';
import Layout from './Layout';

function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='volunteer-experience' element={<VolunteerExperience/>}/>
            <Route path='student-experience' element={<StudentExperience/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
