import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Registration } from './pages/Registration';
import { TaskPage } from './pages/TaskPage';
import { NotFound } from './pages/NotFound';
import { MainLayout } from './layouts/MainLayout';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { selectRegistration } from './redux/slices/registrationSlice';
import { useSelector } from 'react-redux';
function App() {
  
  const {isAuth} = useSelector(selectRegistration);
  return (
    <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route path='/' element={<Registration/>}/>
            <Route path='/tasks' element={
                <ProtectedRoute isAllowed={isAuth} redirectPath="/">
                  <TaskPage/>
                </ProtectedRoute>
              }/>
            <Route path='/*' element={<NotFound/>}/>
          </Route>
    </Routes>

  );
}

export default App;
