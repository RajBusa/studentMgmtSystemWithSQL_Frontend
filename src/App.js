import './App.css';
import AddStudent from './Component/AddStudent';
import Navigationbar from './Component/Navigationbar';
import StudentList from './Component/StudentList';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path='/adddata' element={<AddStudent />}/>
          <Route path='/studentlist' element={<StudentList />}/>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
