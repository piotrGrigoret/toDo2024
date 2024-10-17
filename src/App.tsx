import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Registration } from './pages/Registration';
import { TaskPage } from './pages/TaskPage';
import { NotFound } from './pages/NotFound';
import { MainLayout } from './layouts/MainLayout';
function App() {
  return (
    <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route path='/' element={<Registration/>}/>
            <Route path='/tasks' element={<TaskPage/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Route>
    </Routes>
  );
}

export default App;
