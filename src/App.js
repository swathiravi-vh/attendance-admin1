import logo from './logo.svg';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Studentlist from './Studentlist';
import Attendancecreate from './Attendancecreate';
import Attendancelist from './Attendancelist';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
           <div id="content">
              <Topbar />
              <div class="container-fluid">
                <Routes>
                      <Route exact path="/" element={<Dashboard />}></Route>
                      <Route exact path="/student-list" element={<Studentlist />}></Route>
                      <Route exact path="/student-list/:id" element={<Attendancelist />}></Route> 
                      <Route exact path="/create-attendance/:id" element={<Attendancecreate />}></Route>
                </Routes>
                 
              </div>
           </div>
       </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
