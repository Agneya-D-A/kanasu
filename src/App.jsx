import { useState } from 'react'
import lion from './lion.png'
import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import VolunteerExperience from './pages/VolunteerExperience';
import StudentExperience from './pages/StudentExperience';
import Layout from './Layout';
import Experience from './pages/Experience'
import DefaultExperience from './pages/DefaultExperience';
function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='experiences' element={<Experience/>}>
              <Route index element={<DefaultExperience/>}/>
              <Route path='student' element={<StudentExperience/>}/>
              <Route path='volunteer' element={<VolunteerExperience/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
