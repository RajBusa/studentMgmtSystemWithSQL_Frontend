// student
// root
// Mysql@123
import './App.css';
import AddStudent from './Component/AddStudent';
import Navigationbar from './Component/Navigationbar';
import StudentList from './Component/StudentList';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Alert } from 'react-bootstrap';
import { useState } from 'react';
import Login from './Component/Login';
import Signup from './Component/Signup';

function App() {

  const [alert, setAlert] = useState({type: 'success', message: "Success"});
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navigationbar />
        <Alert alert={alert}/>
        <Routes>
          <Route path='/adddata' element={<AddStudent />}/>
          <Route path='/studentlist' element={<StudentList />}/>
          <Route path='/student/:studentId' element={<AddStudent />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
